import Lang from '@/container/Lang';

export default function Layout({ children }: any) {
    return (
        <>
            <Lang />
            <main>{children}</main>
        </>
    );
}
