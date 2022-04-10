import React from 'react'

export default function AboutUsCards() {
  return (
    <div className='about-us'>   
        <div className="about-us__card card">
            <img src="src/images/CTA1.png" 
                className="about-us__card-image" 
                alt="CTA1" />
            <div className="about-us__card-body">
                <div className="about-us__card-title">
                    Mortgage Calculator
                </div>
                <p className="about-us__card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
        <div className="about-us__card card">
            <img src="src/images/CTA2.png" 
                className="about-us__card-image" 
                alt="CTA1" />
            <div className="about-us__card-body">
                <div className="about-us__card-title">
                    Contact Us
                </div>
                <p className="about-us__card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
        <div className="about-us__card card">
            <img src="src/images/CTA3.png" 
                className="about-us__card-image" 
                alt="CTA1" />
            <div className="about-us__card-body">
                <div className="about-us__card-title">
                    Follow us on Facebook 
                </div>
                <p className="about-us__card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    </div>
  )
}
