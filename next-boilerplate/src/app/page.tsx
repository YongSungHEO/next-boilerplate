import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import SampleComponent from '@/components/Sample';
import SampleService from '@/service/sample';
import type { Sample } from '@/types/Sample';
import styles from '@/styles/Home.module.scss';

async function getData() {
  const sampleService = new SampleService();
  const res = await sampleService.fetchSample();
  const list: Array<Sample> = res?.length ? res : [];

  return list;
}

export default async function Page() {
  const list = await getData();
  const { t } = useTranslation('home');

  return (
    <>
      <main className={styles['home']}>
        <div className={styles['home__title-area']}>
          <AiOutlineUsergroupAdd
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <span className={styles['home__title']}>{t('user_list')}</span>
        </div>
        <div className={styles['home__content']}>
          {list.map((item) => (
            <Link href={`/${item.id}`} key={item.id}>
              <SampleComponent sample={item} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
