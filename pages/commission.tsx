import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

export default function Commission() {
	let working = 1;
	let finished = 2;

	return (
		<Page
			page="commission"
			title="Commissions"
		>
			<Container>
				<p>
					If you are interested in working with me feel free to message me using one of the methods on the front page.
				</p>
				<Overline>commissioned work</Overline>
				<Grid>
					<Project id="smp-website" />
				</Grid>
			</Container>
		</Page>
	)
}
