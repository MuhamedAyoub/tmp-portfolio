import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 10, text: 'Open Source Projects' },
	{ number: 13, text: 'Github Followers' },
	{ number: 30, text: 'Github Stars' },
];

const Accomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((item, index) => (
				<Box key={index}>
					<BoxNum>{item.number}+</BoxNum>
					<BoxText>{item.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Accomplishments;
