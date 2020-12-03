/**
 * @file API call utility file wrapping Axios's API
 */

import axios, { AxiosResponse } from 'axios';
import { HttpMethodTypes } from '../model';
import { isNotNullOrWhitespace } from './ensure';
import { loadSettings } from '.';

/**
 * Wrapper upon Axios's API supporting all HTTP Method Types and using endpoint prefixes in a .env file
 *
 * @param method - The HTTP Method to call
 * @param path - The path to be used (or appended onto REACT_APP_BACKEND_ENDPOINT environment variable)
 * @param data - An optional parameter for PUT and POST allowing data of any kind to be passed in the body of the function
 * @returns The response from the API
 */
const apiCallAsync = async <T = never>(method: HttpMethodTypes, path: string, data: unknown = null): Promise<T> => {
    const { backendEndpoint } = loadSettings();
    const pathWithEndpoint = backendEndpoint + path;

    let res: AxiosResponse<T>;

    switch (method) {
        case HttpMethodTypes.GET:
            res = await axios.get(pathWithEndpoint);
            break;
        case HttpMethodTypes.POST:
            res = await axios.post(pathWithEndpoint, data);
            break;
        case HttpMethodTypes.PUT:
            res = await axios.put(pathWithEndpoint, data);
            break;
        case HttpMethodTypes.DELETE:
            res = await axios.delete(pathWithEndpoint);
            break;
        default:
            throw new Error('Unsupported HTTP Method');
    }

    return res.data;
};

/**
 * Sets the Axios default authentication token
 *
 * @param token - The authentication token to set as default
 */
const setAuthTokenHeader = (token: string): void => {
    token = isNotNullOrWhitespace(() => token);
    axios.defaults.headers.common['token'] = token;
};

/**
 * Clears the Axios default authentication token header
 */
const clearAuthTokenHeader = (): void => {
    delete axios.defaults.headers.common['token'];
};

export { apiCallAsync, setAuthTokenHeader, clearAuthTokenHeader };
