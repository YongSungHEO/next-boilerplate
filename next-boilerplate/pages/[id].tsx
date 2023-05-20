import { GetServerSideProps, NextPage } from 'next';
import { Card } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import SampleService from '@/service/sample';
import type { Sample } from '@/types/Sample';
import styles from '@/styles/SampleDetail.module.scss';

interface Props {
    data: Sample;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const sampleService = new SampleService();
    const res = await sampleService.fetchSampleDetail(Number(context.query.id));
    const data: Sample = res;
    return {
        props: {
            data
        },
    };
};

const Home: NextPage<Props> =({ data }) => {
    const { t } = useTranslation('common');

    return (
        <>
            <div className={styles['sampleDetail']}>
                <p className={styles['']}>{t('user_detail')}</p>
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
        </>
    );
};

export default Home;
