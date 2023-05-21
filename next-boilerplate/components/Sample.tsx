import React from 'react';
import { Card } from 'antd';
import type { Sample as SampleType } from '@/types/Sample';
import styles from '@/styles/Sample.module.scss';

type Props = {
    sample: SampleType;
    moveToDetail: (id: number) => void;
};

const Sample: React.FC<Props> = ({ sample, moveToDetail }) => {
    return (
        <Card
            className={styles['sample']}
            title={sample.name}
            bordered={false}
            style={{ width: '100%' }}
            onClick={() => moveToDetail(sample.id)}
        >
            <p>username: {sample.name}</p>
        </Card>
    );
};

export default Sample;
