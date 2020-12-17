/**
 * @file API call utility file wrapping Axios's API
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpMethodTypes } from '../model';
import { settings, authProvider } from '.';

/**
 * Wrapper upon Axios's API supporting all HTTP Method Types and using endpoint prefixes in a .env file
 *
 * @param method - The HTTP Method to call
 * @param path - The path to be used (or appended onto REACT_APP_BACKEND_ENDPOINT environment variable)
 * @param data - An optional parameter for PUT and POST allowing data of any kind to be passed in the body of the function
 * @returns The response from the API
 */
export const apiCallAsync = async <T = never>(
    method: HttpMethodTypes,
    path: string,
    data: unknown = null
): Promise<T> => {
    const { backendEndpoint } = settings;
    const pathWithEndpoint = backendEndpoint + path;

    const { accessTokenScopes } = settings.auth;

    const { accessToken } = await authProvider.getAccessToken({ scopes: accessTokenScopes });

    // Configure OAuth Header
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    let res: AxiosResponse<T>;

    switch (method) {
        case HttpMethodTypes.GET:
            res = await axios.get(pathWithEndpoint, config);
            break;
        case HttpMethodTypes.POST:
            res = await axios.post(pathWithEndpoint, data, config);
            break;
        case HttpMethodTypes.PUT:
            res = await axios.put(pathWithEndpoint, data, config);
            break;
        case HttpMethodTypes.DELETE:
            res = await axios.delete(pathWithEndpoint, config);
            break;
        default:
            throw new Error('Unsupported HTTP Method');
    }

    return res.data;
};

/**
 * Get a file blob from a protected endpoint
 *
 * @param path - The path to be used (or appended onto REACT_APP_BACKEND_ENDPOINT environment variable)
 * @returns The Blob of data
 */
export const getFileBlobAsync = async (path: string): Promise<Blob> => {
    const { backendEndpoint } = settings;
    const pathWithEndpoint = backendEndpoint + path;

    const { accessTokenScopes } = settings.auth;

    const { accessToken } = await authProvider.getAccessToken({ scopes: accessTokenScopes });

    // Configure OAuth Header
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        responseType: 'blob',
    };

    const res = await axios.get<Blob>(pathWithEndpoint, config);

    return res.data;
};

/**
 * Download a file from a protected endpoing
 *
 * @param path - The path to be used
 * @param fileName - The file name to download
 */
export const downloadFileAsync = async (path: string, fileName: string): Promise<void> => {
    const blob = await getFileBlobAsync(path);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
};
