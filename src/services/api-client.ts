import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b5a662795b984284a3161e0800dd7b36",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(_config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  }
}

export default APIClient;
