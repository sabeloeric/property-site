import React from 'react'

export default function PropertyCard() {
  return (
    <div className='property-card card'>
        <div className='property-card__sticker'>
            Sole Mandate
        </div>
        <div className='property-card__info'>
            <img className='property-card__image' 
                src="src/images/property1.png"
                alt="property-card"
            />
            <div className='property-card__content'>
                <div className='property-card__price'>
                    R1,100,000
                </div>
                <div className='property-card__location'>
                    4 Bedroom house for sale in Stellenbosch
                </div>
                <div className='property-card__features'>
                    <div className='property-card__feature'>
                        <img className='property-card__feature-icon'
                            src="src/images/Listing-Icons.svg"
                            alt="bed"
                            />
                        <div className='property-card__feature-text'>
                            4
                        </div>
                    </div>
                    <div className='property-card__feature'>
                        <img className='property-card__feature-icon'
                            src="src/images/Listing-Icons-1.svg"
                            alt="shower"
                            />
                        <div className='property-card__feature-text'>
                            4
                        </div>
                    </div>
                    <div className='property-card__feature'>
                        <img className='property-card__feature-icon'
                            src="src/images/Listing-Icons-2.svg"
                            alt="garage"
                            />
                        <div className='property-card__feature-text'>
                            4
                        </div>
                    </div>
                </div>
                <div className='property-card__description'>
                    This stylish single-level Cowies Hill home 
                    showcases high-quality finishes, an easy 
                    indoor/outdoor...
                </div>
                <div className='property-card__owner'>
                    <img src='src/images/property-owner.svg' 
                        alt='owner'
                    />
                    <div className='property-card__owner-info'>
                        <div className='property-card__owner-name'>
                            Michelle Ruffelo
                        </div>
                        <div className='property-card__owner-contact'>
                            View contact number
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
