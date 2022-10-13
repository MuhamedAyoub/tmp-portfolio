import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';

const Projects = () => (
	<Section noPadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(
				({ image, title, id, description, tags, source, visit }) => (
					<BlogCard key={id}>
						{/* <Img src={image} /> */}
						<Image
							src={image}
							width="100%"
							height="80%"
							objectFit="cover"
							layout="responsive"
							style={{
								overflow: 'hidden',
							}}
							alt="project image"
						/>
						<TitleContent>
							<HeaderThree title="true">{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks target="_blank" href={visit}>
								Code
							</ExternalLinks>
							<ExternalLinks target="_blank" href={source}>
								Demo
							</ExternalLinks>
						</UtilityList>
					</BlogCard>
				)
			)}
		</GridContainer>
	</Section>
);

export default Projects;
