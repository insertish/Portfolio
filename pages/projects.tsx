import { Page } from '../components/Page';
import { Grid } from '../components/Grid';
import { Project } from '../components/Project';
import { Overline } from '../components/Overline';
import { Container } from '../components/Container';

import { Project as ProjectI } from '../types/Project';
import { ProjectEntry } from '../components/ProjectCard';
import { find_entries } from '../util/loader';
import { Fragment } from 'react';
import { Extra } from '../components/Extra';

interface Props {
	projects: ProjectI[]
}

function getYear(project: ProjectI) {
	return new Date(project.timestamp).getFullYear();
}

function ProjectGrid(props: Props) {
	let put = false;

	let stack = [];
	let components = [];
	let currentYear = getYear(props.projects[0]);

	function push() {
		if (put) {
			components.push(<Extra style="large">{ currentYear }</Extra>);
		} else {
			put = true;
		}
		
		components.push(
			<Grid key={currentYear}>
				{
					stack.map(x =>
						<ProjectEntry key={x.slug} {...x} />
					)
				}
			</Grid>
		);

		stack = [];
	}

	for (let project of props.projects) {
		let year = getYear(project);
		if (currentYear !== year) {
			push();
			currentYear = year;
		}

		stack.push(project);
	}

	if (stack.length > 0) push();

	return (
		<Fragment>
			{ components }
		</Fragment>
	);
}

export default function Projects(props: Props) {
	return (
		<Page
			page="projects"
			title="Projects"
		>
			<Container>
				<p>
					I've made a lot of different things over the years, so I made a list of everything I've ever made (well almost everything). Some smaller and also some older forgotten projects will probably not be here.
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
				<Overline description="sorted by most recent activity">all projects</Overline>
				<ProjectGrid projects={props.projects} />
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
