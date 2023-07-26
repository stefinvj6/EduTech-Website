import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={footer} alt='' />
                        </div>
                        <h2>Archer</h2>
                    </div>
                    <p>
                    Embrace the future of innovation and technology with our cutting-edge tech business solutions.
                    </p>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">Company</h4>
                    <ul className="footer_link">
                        <li><Link to="/courses">Our programs</Link></li>
                        <li><Link to="/services">Our plan</Link></li>
                        <li><Link to="/services">Become a member</Link></li>
                    </ul>
                </div>

                <div className="footer_box">
                    <h4 className="footer_title">Quick Links</h4>
                    <ul className="footer_link">
                        <li><Link to="/aboutus">About Us</Link ></li>
                        <li><Link to="/contactus">Contact us</Link></li>
                        <li><Link to="/supportus">Support us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer