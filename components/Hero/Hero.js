import React from 'react';

import {
	Section,
	SectionSubText,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row noPadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionSubText>
				The purpose of this website is to showcase my skills and projects.
			</SectionSubText>
			<Button
				onClick={() => {
					location.href = 'https://google.com';
				}}>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
