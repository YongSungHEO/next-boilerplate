import Lang from '@/containers/Lang';

export default function Layout({ children }: any) {
    return (
        <>
            <Lang />
            <main>{children}</main>
        </>
    );
}
