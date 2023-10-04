import React from 'react';
import { motion } from 'framer-motion';

import Cloak from '../../../assets/milestones/cloak.gif';

const MilestoneCard = ({ index, hoveredCard, setHoveredCard }) => {
	const isHovered = hoveredCard === index;

	const variants = {
		initial: {
			scale: 1,
			transition: {
				type: 'tween',
				duration: 0.2,
			},
		},
		activeCardHover: {
			scale: 1.3,
			transition: {
				type: 'tween',
				duration: 0.2,
			},
		},
		nonActiveCardHover: {
			scale: 0.95,
			transition: {
				type: 'tween',
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			layout='size'
			variants={variants}
			initial='initial'
			animate={
				hoveredCard === null
					? 'initial'
					: isHovered
					? 'activeCardHover'
					: 'nonActiveCardHover'
			}
			className='card'
			onHoverStart={() => {
				setHoveredCard(index);
			}}
			onHoverEnd={() => {
				setHoveredCard(null);
			}}
		>
			<img src={Cloak} alt='CloakGif' />
		</motion.div>
	);
};

export default MilestoneCard;
