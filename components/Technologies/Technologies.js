import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I &apos; ve worked with a range of technologies in the web development
			world. From Back-end To Design
		</SectionText>
		<List>
			<ListItem>
				<DiFirebase size="3rem" />

				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js Redux and Redux Toolkit
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />

				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node js and Express s with mongodb and mysql
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />

				<ListContainer>
					<ListTitle>DevOps</ListTitle>
					<ListParagraph>
						Experience with <br />
						Docker and Kubernetes
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
