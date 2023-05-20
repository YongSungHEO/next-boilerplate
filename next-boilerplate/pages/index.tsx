import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
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
    const list: Array<Sample> = res?.length ? res : [];
    return {
        props: {
            list
        },
    };
};

const Home: NextPage<Props> =({ list }) => {
    // const isGnb = useModalStore(state => state.isGnb);
    const { t } = useTranslation('home');
    const router = useRouter();
    const moveToDetail = (id: number) => {
        router.push(`/${id}`);
    };

    return (
        <>
            <main className={styles['home']}>
                <div>{t('user_list')}</div>
                <div className={styles['home__content']}>
                    {list.map(item => (
                        <SampleComponent key={item.id} sample={item} moveToDetail={moveToDetail} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
