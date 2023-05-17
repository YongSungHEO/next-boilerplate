import React from 'react';
import { Card } from 'antd';
import type { Sample as SampleType } from '@/types/Sample';
import styles from '@/styles/Sample.module.scss';

type Props = {
    sample: SampleType
};

const Sample: React.FC<Props> = ({ sample }) => {
    return (
        <Card
            className={styles['sample']}
            title={sample.title}
            bordered={false}
            style={{ width: 145 }}
        >
            <p>{sample.title}</p>
        </Card>
    );
};

export default Sample;
