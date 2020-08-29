import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

import { Project as ProjectI } from '../types/Project';
import { ProjectEntry } from '../components/ProjectCard';
import { find_entries } from '../util/loader';

interface Props {
	projects: ProjectI[]
}

export default function Projects(props: Props) {
	return (
		<Page
			page="projects"
			title="Projects"
		>
			<Container>
				<p>
					I've made a lot of different things over the years, so I made a list of everything I've ever made (well almost everything).
				</p>
				<p>
					All the listed projects have some level of information, some including longer backstories and explanations.
				</p>
				<Overline>featured projects</Overline>
				<Grid>
					{
						props.projects
							.filter(x => x.featured)
							.map(x =>
								<Project key={x.slug} project={x} />
						)
					}
				</Grid>
				<Overline description="sorted by date">all projects</Overline>
				<Grid>
					{
						props.projects.map(x =>
							<ProjectEntry key={x.slug} {...x} />
						)
					}
				</Grid>
			</Container>
		</Page>
	)
}

export async function getStaticProps() {
	return {
		props: {
			projects: await find_entries('projects')
		}
	};
}
