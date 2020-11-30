import axios, { AxiosResponse } from 'axios';
import { isNotNullOrWhitespace } from './ensure';

const apiCall = async <T = any>(method: string, path: string, data: any = null) => {
    try {
        let pathWithEndpoint = path;
        if (process && process.env) {
            if (process.env.BACKEND_ENDPOINT) {
                pathWithEndpoint = process.env.BACKEND_ENDPOINT + path;
            } else if (process.env.REACT_APP_BACKEND_ENDPOINT) {
                pathWithEndpoint = process.env.REACT_APP_BACKEND_ENDPOINT + path;
            }
        }

        let res: AxiosResponse<T>;

        switch (method.toLowerCase()) {
            case 'get':
                res = await axios.get(pathWithEndpoint);
                break;
            case 'post':
                res = await axios.post(pathWithEndpoint, data);
                break;
            case 'put':
                res = await axios.put(pathWithEndpoint, data);
                break;
            case 'delete':
                res = await axios.delete(pathWithEndpoint);
                break;
            default:
                throw new Error('Unknown HTTP Method');
        }

        return res.data;
    } catch (err) {
        if (err.response) {
            err.response.data.status = err.response.status;
            throw err.response.data;
        }

        throw err;
    }
};

const setAuthTokenHeader = (token: string) => {
    token = isNotNullOrWhitespace(token);
    axios.defaults.headers.common['token'] = token;
};

const clearAuthTokenHeader = () => {
    delete axios.defaults.headers.common['token'];
};

export { apiCall, setAuthTokenHeader, clearAuthTokenHeader };
