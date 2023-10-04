import React from 'react';
import { motion } from 'framer-motion';

import MilestoneCard from './card';

import './Milestones.css';

const Milestones = () => {
	const [hoveredCard, setHoveredCard] = React.useState(null);
	const CardVariants = (index) => {
		return {
			hidden: {
				position: 'absolute',
				left: '40%',
				rotate: `${Math.floor(Math.random() * 15) * (-1) ** index}deg`,
			},
			visible: {
				position: 'absolute',
				left: `${index * 16}%`,
				transition: {
					type: 'tween',
					delay: 0.3,
					duration: 0.65,
				},

				rotate: `0deg`,
			},
		};
	};

	return (
		<div className='milestonesContainer'>
			<div className='cardWrapper'>
				{Array(6)
					.fill(1)
					.map((card, index) => (
						<motion.div
							layout='position'
							variants={CardVariants(index)}
							initial='hidden'
							whileInView='visible'
							viewport={{
								once: false,
							}}
							key={index}
							className='cardContainer'
						>
							<MilestoneCard
								index={index}
								hoveredCard={hoveredCard}
								setHoveredCard={setHoveredCard}
							/>
						</motion.div>
					))}
			</div>
		</div>
	);
};

export default Milestones;
