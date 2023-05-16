import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import ReactGA from 'react-ga';

const usePageTracking = () => {
    const router = useRouter();

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            // ReactGA.pageview(location.pathname + location.search);
        }
    }, [router.events]);
};

export default usePageTracking;
