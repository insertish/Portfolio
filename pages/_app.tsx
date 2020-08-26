import type { AppProps } from 'next/app';
import '../styles/globals.scss';

import dayjs from 'dayjs';
import formatPlugin from 'dayjs/plugin/advancedFormat';

dayjs.extend(formatPlugin);

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default App
