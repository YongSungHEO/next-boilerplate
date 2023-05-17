import { GetServerSideProps, NextPage } from 'next';
import SampleService from '@/service/sample';
import type { Sample } from '@/types/Sample';
import styles from '@/styles/Home.module.scss';

interface Props {
    list: Array<Sample>;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const sampleService = new SampleService();
    const res = await sampleService.fetchSample();
    const list: Array<Sample> = res?.data?.data?.length ? res.data.data : [];
    return {
        props: {
            list
        },
    };
};

const Home: NextPage<Props> =({ list }) => {
    return (
        <>
            <main className={`${styles.main}`}>
                {list.map(item => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </main>
        </>
    );
};

export default Home;
