import "../styles/globals.scss";
import type { AppProps } from "next/app";
import CommonLayout from "../layouts/CommonLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CommonLayout>
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
