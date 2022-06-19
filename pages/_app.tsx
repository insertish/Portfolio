import "../styles/globals.scss";
import type { AppProps } from "next/app";
import CommonLayout from "../layouts/CommonLayout";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PlausibleProvider domain="insrt.uk">
            <CommonLayout>
                <Component {...pageProps} />
            </CommonLayout>
        </PlausibleProvider>
    );
}

export default MyApp;
