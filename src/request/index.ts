import axios, { AxiosInstance } from "axios";

const requestDevelopment = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// request interceptor
requestDevelopment.interceptors.request.use(
  (config: any) => {
    // 先暂时配置一个永远有效的token
    config.headers.Authorization = "Basic oPPuoK43RE6hGdSpDOFbTw";
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// response interceptor
requestDevelopment.interceptors.response.use(
  (response: { status: number }) => {
    if (response.status === 200) {
      console.log("请求成功");
    } else {
      console.log("请求失败");
    }
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

/* 
  使用create创建axios实例之后，mock拦截不到，目前只能想到这么处理先
*/
let request: AxiosInstance = axios;
if (process.env.NODE_ENV !== "development") {
  request = requestDevelopment;
}
export default request;
