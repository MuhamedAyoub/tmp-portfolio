import React, { useState, useRef, useEffect } from 'react';

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: 'smooth' });
	};

	const ClickHandler = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const ScrollHandler = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		addEventListener('scroll', handleResize);
	}, []);

	return (
		<Section about="about">
			<SectionTitle>About Me </SectionTitle>
			<SectionText>
				the purpose of this section is to provide information about the
				applications
			</SectionText>
			<CarouselContainer onScroll={ScrollHandler} ref={carouselRef}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode
							key={index}
							final={index === TOTAL_CAROUSEL_COUNT - 1}>
							<CarouselItem
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e) => ClickHandler(e, index)}>
								<CarouselItemTitle>
									{`${item.year}`}
									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="https://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.5 5.5C3.8871 5.5.5 4.38871 5 3V3"
											fill="url(#paint_linear)"
											fillOpacity="0.33"
										/>
										<defs>
											<linearGradient
												id="pain0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="200"
												y2="0.500295"
												gradientUnits="userSpaceOneUSer">
												<stop stopColor="white" />
												<stop
													offset="0.79478"
													stop-color="white"
													stop-opacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						key={index}
						index={index}
						onClick={(e) => ClickHandler(e, index)}
						active={activeItem}
						type="button">
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
			<SectionDivider />
		</Section>
	);
};

export default Timeline;
