import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {
  return (
    <>
    <section>
        <div className="container">
            <div className="home-container">
                <div className="home-content">
                    <h2 className="section_title">Learn everything for free!!</h2>
                    <p>Master Trending Technolgies with Archer. Invest your time and return Skils </p>
                    <div className="home-btns">
                        <button className='register-btn'>Get Started</button>
                        <button className='register-btn'>Watch now</button>
                    </div>
                </div>
                <div className="home-img">
                    <div className="home-img-wrapper">
                        <div className="box-01">
                            <div className="box-img">
                                <img src={meta} alt="" />
                            </div>
                        </div>
                        <div className="whatsapp-container">
                            <h5>500 + students</h5>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className="support">
                            <h5>Active Support</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Courses />
    <Community />
    <Plans />

    </>
  )
}

export default Home