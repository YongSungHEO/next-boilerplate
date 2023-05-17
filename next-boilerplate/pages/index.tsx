import { GetServerSideProps, NextPage } from 'next';
import SampleService from '@/service/sample';
import type { Sample } from '@/types/Sample';
import SampleComponent from '@/components/Sample';
// import { useModalStore } from '@/store/sample';
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
    // const isGnb = useModalStore(state => state.isGnb);
    return (
        <>
            <main className={styles['home']}>
                <div className={styles['home__content']}>
                    {list.map(item => (
                        <SampleComponent key={item.id} sample={item} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
