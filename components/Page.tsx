import Head from "next/head";
import { Navbar } from "./Navbar";
import { ReactNode, Fragment } from "react";

export type PageSlug = 'index' | 'projects' | 'posts' | 'commission' | 'subpage';

interface Props {
    page: PageSlug,
    title?: string,
    hideNavbar?: boolean,
    children?: ReactNode | ReactNode[]
}

export function Page(props: Props) {
    let title = (props.title ?? props.page) + " – insrt.uk";

    return (
		<Fragment>
            <Head>
                <title>{ title }</title>
				<meta property="og:title" content={ props.title ?? props.page } />
                <meta property="og:site_name" content="Paul Makles – insrt.uk" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                { !props.hideNavbar && <Navbar page={props.page} /> }
                { props.children }
            </main>
            <footer>
                &copy; { new Date().getFullYear() } Paul Makles
            </footer>
        </Fragment>
    )
}
