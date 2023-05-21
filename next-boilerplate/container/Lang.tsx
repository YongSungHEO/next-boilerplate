import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps, Button, Dropdown, Space } from 'antd';
import styles from '@/styles/Lang.module.scss';

const Lang: React.FC = () => {
    const router = useRouter();
    const { locale, locales, pathname, asPath } = router;
    const [, setSelectedLocale] = useState('');

    useEffect(() => {
        setSelectedLocale(locale ?? '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const items: MenuProps['items'] = locales?.map(item => {
        return {
            label: item,
            key: item,
        };
    });

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        router.push(pathname, asPath, { locale: e.key });
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div className={styles['lang']}>
            <Dropdown menu={menuProps} trigger={['click']}>
                <Button>
                    <Space>
                        {locale}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    );
};

export default Lang;
