import axios, { AxiosInstance } from 'axios';

export default abstract class ApiService {
  protected constructor() {
    /* */
  }

  protected abstract unpackResponse(response: any): any;

  protected register(baseURL: string): AxiosInstance {
    const client = axios.create({ baseURL });
    client.interceptors.response.use(
      (res) => res,
      async (err) => {
        //
      },
    );
    return client;
  }

  protected setHeader(client: AxiosInstance): AxiosInstance {
    client.defaults.headers.common['apiKey'] = 'sample';
    return client;
  }
}
