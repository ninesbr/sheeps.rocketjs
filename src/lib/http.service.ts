import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {HttpServiceError} from "./errors/http.service.error";

export class HttpService {
    private readonly instance: AxiosInstance;

    constructor(baseURL: string, timeout?: number, headers?: { [key: string]: string | number; }) {
        this.instance = axios.create({
            baseURL: baseURL || '',
            timeout: timeout || 10_000,
            headers: Object.assign({}, headers) as any
        });
        this.instance.interceptors.response.use(
            (response) => response.data,
            (error) => Promise.reject(new HttpServiceError(
                error.code,
                error.response.status,
                error.message,
                error.response.data)
            ));
    }

    async doGet(path: string, options?: AxiosRequestConfig): Promise<any> {
        return this.instance.get(path, options);
    }
}