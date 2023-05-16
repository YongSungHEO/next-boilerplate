import { useEffect, useState } from 'react';
import Router from 'next/router';

const useRouterChange = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        Router.events.on('routeChangeStart', (url) => {
            setIsLoading(true);
        });

        Router.events.on('routeChangeComplete', (url) => {
            setIsLoading(false);
        });

        Router.events.on('routeChangeError', (url) => {
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Router]);

    return isLoading;
};

export default useRouterChange;
