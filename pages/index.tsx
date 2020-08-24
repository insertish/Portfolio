import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

export default function Home() {
	return (
		<Page
			page="index"
			title="Paul Makles"
		>
			<Container>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima maxime, commodi hic natus, soluta amet ex facilis placeat blanditiis id quaerat modi porro. Doloremque, dolorum unde! Fugiat, dignissimos ipsum.
				</p>
				<Overline>contact me</Overline>
				<p>
					Message me on Discord: <code>insert#0751</code>
					<br/>
					Email me at <a href="mailto:me@insrt.uk">me@insrt.uk</a>
				</p>
				<Overline>recent projects</Overline>
				<Grid>
					<Project id="revolt" />
					<Project id="teamsy" />
					<Project id="smp-website" />
					<Project id="plottie" />
					<Project id="byol" />
				</Grid>
			</Container>
		</Page>
	)
}
