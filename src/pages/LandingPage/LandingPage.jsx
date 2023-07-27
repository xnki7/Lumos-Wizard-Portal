import React from 'react'
import "./LandingPage.css"
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'

function LandingPage() {
  return (
    <div className='LandingPage'>
      <Navbar />
      <div className='Welcome'>
        <div className='Left'>
          <p className='TagLine'>Wizard</p>
          <p className='TagLine blue'>Portal</p>
          <p className='TagLine'>Tagline Here</p>
          <p className='About'>The Wizard Program is a contributor/bounty platform that allows users, referred to as Wizards, to claim and complete tasks, called quests, to earn XP (experience points).</p>
          <button id='getStarted'>Get Started</button>
        </div>
        <div className='Right'>
          <img className="float-up-down" src={require('./wiz.png')} />
        </div>
      </div>
      <div className="slider">
        <Slider />
      </div>
    </div>
  )
}

export default LandingPage