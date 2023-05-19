import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/Error.module.scss';

const Error: NextPage = () => {
    const router = useRouter();

    return (
        <div className={styles['error']}>
            <div>
                <FaExclamationTriangle />
                <span className={styles['error__description']}>잠시 후 다시 시도해 주세요.</span>
                <p className={styles['error__bug-report']}>
                    버그 제보 :
                    <a href="mailto:sample@gmail.com" className={styles['error_bug-report-email']}>
                        sample@gmail.com
                    </a>
                </p>
            </div>
            <button className={styles['error__button']} onClick={() => router.push('/')}>홈 화면</button>
        </div>
    );
};

export default Error;
