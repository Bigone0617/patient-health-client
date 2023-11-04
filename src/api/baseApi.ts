import axios, { AxiosInstance } from "axios";
import { API_URL } from "../common/constants";
import isNil from "lodash/isNil";

class BaseApoi<T> {
  resource: string;
  axiosInstance: AxiosInstance;
  accessToken?: string;

  constructor(resource: string) {
    this.resource = resource;
    this.axiosInstance = axios.create({ baseURL: API_URL });
    this.axiosInstance.interceptors.response.use((response) => {
      this.handleResponse(response.data);
      return response;
    });

    this.axiosInstance.interceptors.request.use((config) => {
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        alert(error.message);
        return Promise.reject(error);
      }
    );
  }

  private handleResponse(body: any) {
    if (isNil(body) || typeof body !== "object") {
      return body;
    }
  }
}

export default BaseApoi;
