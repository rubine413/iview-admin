import axios from 'axios';
import qs from 'querystring';

const host = process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8090/api' : 'http://10.47.12.168:8080/api';

// 存储当前请求中的地址, 出错或响应后移除, 如果存在重复请求, 则取消原请求
let requestURLs = {};

let CancelToken = axios.CancelToken;

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    let data = config.method === 'get' ? qs.stringify(config.params) : config.data;    
    console.log('请求对象 --> ', config.url, config.method, decodeURIComponent(data));
    return config;
}, function (error) {
    // Do something with request error
    console.log('请求错误 --> ', error);
    return Promise.reject(error);
});

// 统一接口拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('响应对象 --> ', response.config.url, response.config.method, decodeURIComponent(response.config.data), response.data);
    requestURLs[response.config.url] = null;
    return response;
}, function (error) {
    // Do something with response error
    console.log('响应错误 --> ', error);
    return Promise.reject(error);
});

let dealReq = function (url, cancel) {
    if (requestURLs[url]) {
        console.log('取消请求 --> ', url);
        requestURLs[url]('取消请求:' + url);
    }
    requestURLs[url] = cancel;
};

export default {
    get(url, params) {
        return axios.get(`${host}/${url}`, {
            params,
            cancelToken: new CancelToken(function executor(cancel) {
                let reqURL = `${host}/${url}`;
                dealReq(reqURL, cancel);
            })
        });
    },
    post(url, params) {
        return axios.post(`${host}/${url}`, qs.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            cancelToken: new CancelToken(function executor(cancel) {
                let reqURL = `${host}/${url}`;
                dealReq(reqURL, cancel);
            })
        });
    },
    put(url, params) {
        return axios.put(`${host}/${url}`, { params });
    },
    delete(url, params) {
        return axios.delete(`${host}/${url}`, { params });
    },
    all: axios.all,
    spread: axios.spread
};
