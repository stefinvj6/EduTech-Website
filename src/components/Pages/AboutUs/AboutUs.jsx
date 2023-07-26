import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'

function AboutUs() {
  return (
    <div className='container'>
        <div className="about-us-container">
            <div className="team-members">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img src={miya} alt="" className="member-images" />
                    <h3 className="member-name">Archer</h3>
                    <p className="member-role">Co-Founder</p>
                </div>
            </div>
            <div className="about-us-description">
                <h1 className="about-us-heading">About Us</h1>
                <p>With a passion for empowering of all ages ,our mission 
                    is to make education accesssible, engagingand personalized 
                    through our cutting edge educational technolgy platform.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs