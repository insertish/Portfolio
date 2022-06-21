import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Head from "next/head";

export default function CommonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head>
                <meta
                    property="og:site_name"
                    content="Paul Makles – insrt.uk"
                />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
