import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

function Community() {
  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className="section-title">Join Our Free Tech <br /> Community</h2>
                <p>Unlock the power of knowledge and innovation by joining
                our vibrant and free whatsapp tech community.</p>
                <button className="register-btn">Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Community