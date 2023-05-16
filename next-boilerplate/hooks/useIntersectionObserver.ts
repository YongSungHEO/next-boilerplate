import { useRef, useEffect } from 'react';

const useIntersectionObserver = (callback: any) => {
    const observer = useRef<any>();
    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        callback();
                    }
                });
            },
            { threshold: 1 }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const observe = (element: HTMLElement) => {
        observer.current.observe(element);
    };

    const unobserve = (element: HTMLElement) => {
        observer.current.unobserve(element);
    };

    const disconnet = () => {
        observer.current.disconnect();
    };

    return [observe, unobserve, disconnet];
};

export default useIntersectionObserver;
