import "../styles/globals.scss";
import type { AppProps } from "next/app";
import CommonLayout from "../layouts/CommonLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CommonLayout>
            <Component {...pageProps} />
        </CommonLayout>
    );
}

export default MyApp;
