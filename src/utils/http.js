import axios from 'axios'
import qs from 'qs'
import router from '../router'

let instance = axios.create(({
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: data => qs.stringify(data)
}))

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken')
    token && (config.headers.Authorization = token)
    return config
}, error => {
    router.push({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
    })
    return Promise.reject(error);
})

instance.interceptors.response.use(res => {
    let token = res.headers.authorization
    if (token) {
        localStorage.setItem('userToken', token)
    }
    return res.data
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 401:
                console.log("尚未登录，请登录");
                this.$route.replace({
                    path: '/login',
                    query: {redirect: router.currentRoute.fullPath}
                });
                break;
            case 403:
                console.log("登录过期，请重新登录");
                localStorage.removeItem('token');
                setTimeout(() => {
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                }, 1000);
                break;
            case 404:
                console.log("404");
                break;
            case 500:
                console.log("服务器出错");
                break;
            default:
                console.log("未知错误");
        }
    }
    return Promise.reject(error);
})

const api = {
    get(url, params) {
        return instance({
            method: 'get',
            url,
            params,
        })
    },
    post(url, data) {
        return instance({
            method: 'post',
            url,
            data: data,
        })
    },
    put (url, params, data) {
        const config = {
            method: 'put',
            url: url
        }
        if (params) {
            config.params = params
        }
        if (data) {
            config.data = data
        }
        return instance(config)
    },
    delete (url, params) {
        const config = {
            method: 'delete',
            url: url
        }
        if (params) {
            config.params = params
        }
        return instance(config)
    }
}

export default api
