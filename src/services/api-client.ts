import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiInterface = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "faf01037fd7547beab8560488db4db63",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiInterface
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = () => {
    return apiInterface
      .post<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
}

export default APIClient;
