import ApiService from '@/service';
import { AxiosInstance, AxiosResponse } from 'axios';

export default class SampleService extends ApiService {
    sampleApi: AxiosInstance;

    constructor() {
        super();
        this.sampleApi = this.register('');
    }

    protected unpackResponse(res: AxiosResponse): any {
        // 
    }

    async sample(): Promise<any> {
        return this.sampleApi.get('');
    }
}
