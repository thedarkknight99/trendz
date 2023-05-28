import React from 'react'
import "./Footer.css"


const Footer = () => {

    return (
        <footer className='main-footer'>
            <div className='footer-links'>
                <div>
                    <div>Contact Us</div>
                    <div>FAQ</div>
                    <div>Blogs</div>
                    <div>Terms & Conditions</div>
                </div>
                <div>
                    <div>Return Policy</div>
                    <div>Place Return Request</div>
                </div>
                <div>
                    <div>Github</div>
                    <div>Linkedin</div>
                    <div>Twitter</div>
                </div>
            </div>
            <div className='footer-text'>© Trendz | All rights Reserved.</div>
        </footer>
    )
}

export default Footer;