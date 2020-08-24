import Head from "next/head";
import { Navbar } from "./Navbar";
import { ReactNode, Fragment } from "react";

export type PageSlug = 'index' | 'projects' | 'posts' | 'commission';

interface Props {
    title?: string,
    page: PageSlug,
    hideNavbar?: boolean,
    children?: ReactNode | ReactNode[]
}

export function Page(props: Props) {
    return (
		<Fragment>
            <Head>
                <title>{ props.title ?? props.page } – insrt.uk</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                { !props.hideNavbar && <Navbar page={props.page} /> }
                { props.children }
            </main>
            <footer>
                &copy; 2020 Paul Makles
            </footer>
        </Fragment>
    )
}
