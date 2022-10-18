import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:+213561475310">+213561475310</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:ameri.mohamedayoub@gmail.com">
						ameri.mohamedayoub@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com">
						<AiFillGithub />
					</SocialIcons>
					<SocialIcons href="https://github.com">
						<AiFillInstagram />
					</SocialIcons>
					<SocialIcons href="https://github.com">
						<AiFillLinkedin />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
