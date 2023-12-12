import SampleService from '@/service/sample';
import { Card } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { AiOutlineUser } from 'react-icons/ai';
import type { Sample } from '@/types/Sample';
import styles from '@/styles/SampleDetail.module.scss';

async function getData(id: number) {
  const sampleService = new SampleService();
  const res = await sampleService.fetchSampleDetail(id);
  const data: Sample = res;

  return data;
}

async function Page({ params }: { params: { id: number } }) {
  const data = await getData(params.id);
  const { t } = useTranslation('common');

  return (
    <main>
      <div className={styles['sampleDetail']}>
        <div className={styles['sampleDetail__title-area']}>
          <AiOutlineUser
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <span className={styles['sampleDetail__title']}>
            {t('user_detail')}
          </span>
        </div>
        <Card
          className={styles['sampleDetail__card']}
          title={data.name}
          bordered={false}
          style={{ width: '100%' }}
        >
          <p>username: {data.name}</p>
          <p>email: {data.email}</p>
          <p>street: {data.address.street}</p>
          <p>suite: {data.address.suite}</p>
          <p>city: {data.address.city}</p>
          <p>zipcode: {data.address.zipcode}</p>
          <p>lat: {data.address.geo.lat}</p>
          <p>lng: {data.address.geo.lng}</p>
        </Card>
      </div>
    </main>
  );
}

export default Page;
