import "balloon-css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";
import CommonLayout from "../layouts/CommonLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CommonLayout>
            <Head>
                <meta
                    property="og:site_name"
                    content="Paul Makles – insrt.uk"
                />
            </Head>
            <Component {...pageProps} />
            <script
                defer
                data-domain="insrt.uk"
                data-api="/api/hello"
                src="/js/p.js"></script>
        </CommonLayout>
    );
}

export default MyApp;
