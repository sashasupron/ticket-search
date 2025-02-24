import axios, { AxiosInstance } from 'axios';



export const makeAxiosInstance = ({
    baseURL,
    contentType = "application/json"
}: {
    baseURL: string;
    contentType: string;
}) => {
    const instance = axios.create({
        baseURL: baseURL,
        headers: {
            "Content-Type": contentType,
        },
        withCredentials: true
    })
    return instance;
}



export class ResourceInstance {
    baseUrl: string;
    contentType: string;
    readonly instance: AxiosInstance;

    constructor({
        baseUrl,
        contentType = "application/json"
    }: {
        baseUrl: string;
        contentType: string;
    }) {
        this.baseUrl = baseUrl;
        this.contentType = contentType;
        this.instance = makeAxiosInstance({ baseURL: this.baseUrl, contentType: this.contentType });
    }
   async get<ResponseT, ParamsT>({
        url,
        params,
    }: {
        url: string;
        params?: ParamsT;
    })  {
        return (await this.instance.get<ResponseT>(url, { params })).data;
    }
    async post<ResponseT, BodyT>({
        url,
        data,
    }: {
        url: string;
        data?: BodyT;
    }) {
        return (await this.instance.post<ResponseT>(url, data)).data;
    }
    async put<ResponseT, BodyT>({
        url,
        data,
    }: {
        url: string;
        data?: BodyT;
    }) {
        return (await this.instance.put<ResponseT>(url, data)).data;
    }
    async patch<ResponseT, BodyT> ( {
        url,
        data,
    }: {
        url: string;
        data?: BodyT;
    }) {
        return (await this.instance.patch<ResponseT>(url, data)).data;
    }
    async delete<ResponseT>({
        url,
    }: {
        url: string;
    }) {
        return (await this.instance.delete<ResponseT>(url)).data;
    }
} 