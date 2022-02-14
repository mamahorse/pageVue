/*eslint-disable */
import { message } from 'ant-design-vue';
import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { gateWayUrl } from './sysUtils';
import { getToken } from './utils';


export default class RequestBase {
    static init(): AxiosInstance {
        const instance = Axios.create({
            baseURL: gateWayUrl(),    
            timeout: 5000,                           // 设置超时时间
            headers: { 'Authorization': getToken()+'' }
        });
        instance.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.message.includes("timeout")) {
                    message.error("请检查您的网络设置");
                    return Promise.reject(error)
                }
                return Promise.reject(error);
            }
        )
        return instance;
    }
    static async get(url: string, config?: AxiosRequestConfig) {
        let res = undefined;

        await this.init().get(url, config).then((result) => {
            if (result) {
                if (result.data.code !== 2000) {
                    message.warn({
                        content: result.data.message
                    })
                } else {
                    res = result.data.content;
                }
            } else {
                return message.warn("网络错误")
            }
        });
        return res;
    }
    static async post(url: string, data?: any, config?: AxiosRequestConfig) {
        let res = undefined;
        await this.init().post(url, data, config).then((result => {
            if (result) {
                if (result.data.code !== 2000) {
                    message.warn({
                        content: result.data.message
                    })
                } else {
                    res = result.data.content;
                }
            } else {
                return message.warn("网络错误")
            }
        })

        )

        return res;
    }
    static async delete(url: string, config?: AxiosRequestConfig) {
        return this.init().delete(url, config);
    }
    static async put(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.init().put(url, data, config);
    }

    static getRequestData(data: any) {
        if (data.data.code !== 2000) {
            message.warn({
                content: data.data.message
            })
        } else {
            return data;
        }
    }
}