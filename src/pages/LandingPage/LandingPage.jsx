import React from 'react';
import './LandingPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import FAQs from '../../components/FAQ/FAQ';

function LandingPage() {
	return (
		<div className='LandingPage'>
			<Navbar />
			<div className='Welcome'>
				<div className='Left'>
					<p className='TagLine'>Wizard</p>
					<p className='TagLine blue'>Portal</p>
					<p className='TagLine'>Tagline Here</p>
					<p className='About'>
						The Wizard Program is a contributor/bounty platform that allows
						users, referred to as Wizards, to claim and complete tasks, called
						quests, to earn XP (experience points).
					</p>
					<button id='getStarted'>Get Started</button>
				</div>
				<div className='Right'>
					<img className='float-up-down' src={require('./wiz.png')} />
				</div>
			</div>
			<div className='slider-1'>
				<Slider />
			</div>
			<hr />
			<div className='Milestones'>
				<p className='section-head'>Milestones</p>
				<div className='MilestoneImg'>
					<img src={require('./milestone.png')} />
				</div>
			</div>
			<hr />
			<div>
				<p className='section-head'>FAQs</p>
				<FAQs />
			</div>
			<hr />
		</div>
	);
}

export default LandingPage;
