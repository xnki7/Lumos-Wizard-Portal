import React from 'react';
import FAQCard from './FAQCard';
import './FAQ.css';

const FAQData = [
	{
		question: 'If you are a - web3 enthusiast, budding developer ?',
		answer:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt blanditiis provident quisquam! Laudantium ut et praesentium saepe dolores consequatur magni dolore. Aspernatur eligendi, molestias esse expedita quas alias. Dolores!',
	},
	{
		question:
			'If you are a - web3 enthusiast, budding developer, student representative, interested in community building or an awesome ?',
		answer:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt blanditiis provident quisquam! Laudantium ut et praesentium saepe dolores consequatur magni dolore. Aspernatur eligendi, molestias esse expedita quas alias. Dolores!',
	},
	{
		question: 'If you are a - web3 enthusiast, budding developer ?',
		answer: 'If you are a - web3 enthusiast, budding developer ?',
	},
];

const FAQs = () => {
	return (
		<div className='FAQ-container'>
			{FAQData.map((faq, index) => (
				<FAQCard {...faq} key={index} />
			))}
		</div>
	);
};

export default FAQs;
