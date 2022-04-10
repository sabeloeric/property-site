import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer__content'>
            <div className='footer__association'>
                <img src='src/images/Associations/IEASA/Light.png' 
                    className='footer__association-logo'
                    alt='logo'
                />
                <img src='src/images/Associations/EAAB/Light.png' 
                    className='footer__association-logo'
                    alt='logo'
                />
            </div>
            <div className='footer__browse'>
                Browse: Home | Residential For Sale [5] | Calculators | Company Profile | Agent Search | Contact Us | Website Map | Links | Privacy Policy
            </div>
            <div className='footer__residence'>
                Residential For Sale [54]: Amanzimtoti [12] | Athlone Park [3] | Doonside [6] | Warner Beach [11] | St Winifreds [4] | Residential To Let [54]: Amanzimtoti [12] | Athlone Park [3] | Doonside [6] | Warner Beach [11] | St Winifreds [4] | 
            </div>
            <div className='footer__logos'>
                <div className='footer__propdata-logo'>
                    <img src='src/images/footer-icon.svg' alt='logo' />
                    <div className='footer__copyright'>
                        Website Powered by Prop Data
                        <br />
                        Copyright © 2019 Name
                    </div>
                </div>
                <div className='footer__social-media'>
                    <img src='src/images/Facebook.svg' alt='facebook' />
                    <img src='src/images/Twitter.svg' 
                        className='footer__twitter-logo'
                        alt='twitter' />
                    <img src='src/images/YouTube.svg' alt='youtube' />
                </div>
            </div>
        </div>
    </div>
  )
}
