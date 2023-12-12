import ApiService from '@/service';
import { AxiosInstance, AxiosResponse } from 'axios';
import type { Sample } from '@/types/Sample';

export default class SampleService extends ApiService {
  sampleApi: AxiosInstance;

  constructor() {
    super();
    this.sampleApi = this.register('https://jsonplaceholder.typicode.com/');
  }

  protected unpackResponse(res: AxiosResponse): any {
    if (res) {
      if (res.status !== 200) {
        return res.data.error;
      } else {
        if ('data' in res) {
          return res.data;
        }
      }
    }
  }

  async fetchSample(): Promise<Array<Sample>> {
    return this.unpackResponse(await this.sampleApi.get('users'));
  }

  async fetchSampleDetail(id: number): Promise<Sample> {
    return this.unpackResponse(await this.sampleApi.get(`users/${id}`));
  }
}
