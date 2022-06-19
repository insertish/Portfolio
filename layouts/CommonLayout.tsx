import Navbar from "../components/navigation/Navbar";

export default function CommonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
