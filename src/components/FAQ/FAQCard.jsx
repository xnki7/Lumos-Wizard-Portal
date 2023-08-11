import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './FAQ.css';

const FAQCard = ({ question, answer }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div className='FAQ-Card'>
			<div className='Question-container'>
				<span className='FAQ-Text Question'>{question}</span>
				<svg
					width={42}
					height={42}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 256 256'
					fill='#fff'
					className='Caret-Icon'
					style={{ rotate: isOpen ? '180deg' : '0deg' }}
					onClick={() => setIsOpen(!isOpen)}
				>
					<path d='M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z' />
				</svg>
			</div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						className='Answer-container'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { height: 'auto' },
							collapsed: { height: 0 },
						}}
						transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 1] }}
					>
						<div className='Divider' />
						<motion.span
							className='FAQ-Text Answer'
							initial='collapsed'
							animate='open'
							exit='collapsed'
							variants={{
								open: {
									opacity: 1,
									transition: {
										duration: 0.3,
										ease: [0.04, 0.62, 0.23, 0.98],
										delay: 0.2,
									},
								},
								collapsed: {
									opacity: 0,
									transition: {
										duration: 0.3,
										ease: [0.04, 0.62, 0.23, 0.98],
										delay: -0.2,
									},
								},
							}}
						>
							{answer}
						</motion.span>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FAQCard;
