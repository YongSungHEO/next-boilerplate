import { Card } from 'antd';
import React from 'react';
import type { Sample as SampleType } from '@/types/Sample';
import styles from '@/styles/Sample.module.scss';

type Props = {
  sample: SampleType;
};

function Sample({ sample }: Props) {
  return (
    <Card
      className={styles['sample']}
      title={sample.name}
      bordered={false}
      style={{ width: '100%' }}
    >
      <p>username: {sample.name}</p>
    </Card>
  );
}

export default Sample;
