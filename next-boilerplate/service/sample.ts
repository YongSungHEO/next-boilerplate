import ApiService from '@/service';
import { AxiosInstance, AxiosResponse } from 'axios';

export default class SampleService extends ApiService {
    sampleApi: AxiosInstance;

    constructor() {
        super();
        this.sampleApi = this.register('http://localhost:3000');
    }

    protected unpackResponse(res: AxiosResponse): any {
        // 
    }

    async fetchSample(): Promise<any> {
        return this.sampleApi.get('api');
    }
}
