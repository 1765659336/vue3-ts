import axios, { AxiosInstance } from "axios";
import { ElMessage } from "element-plus";
import { useUserInfoStore } from "src/store/index";

const requestDevelopment = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// request interceptor
requestDevelopment.interceptors.request.use(
  (config: any) => {
    const UserInfoStore = useUserInfoStore();
    config.headers.Authorization = UserInfoStore.token
      ? "Basic" + UserInfoStore.token
      : "";
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// response interceptor
requestDevelopment.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// request interceptor
axios.interceptors.request.use(
  (config: any) => {
    const UserInfoStore = useUserInfoStore();
    config.headers.Authorization = UserInfoStore.token
      ? "Basic" + UserInfoStore.token
      : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      ElMessage.error(response.config.url + "接口报错:" + response.status);
    }
    if (!response.data.status) {
      ElMessage.error(
        response.config.url + "接口报错:" + response.data.message
      );
    } else {
      ElMessage.success(response.config.url + "接口成功:" + response.data.message);
      return response;
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

/* 
  使用create创建axios实例之后，mock拦截不到，目前只能想到这么处理先
  开发环境用原始axios搭配mock拦截接口
*/
let request: AxiosInstance = requestDevelopment;
if (process.env.NODE_ENV === "development") {
  request = axios;
}
export default request;
