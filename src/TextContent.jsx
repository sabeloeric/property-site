import React from 'react'

export default function TextContent() {
  return (
    <div className='text-content'>
        <h2 className='text-content__title'>
            Lorem ipsum dolor sit amet
        </h2>
        <div className='text-content__subtitle'>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. In eu scelerisque dui. 
            Proin porta consectetur euismod. Duis 
            pharetra dapibus blandit. Aenean lobortis 
            orci a egestas eleifend. Pellentesque faucibus 
            mi et interdum molestie. Quisque in diam felis. 
            Ut vitae elementum leo.
        </div>
        <button className='button button--primary text-content__button'>
            Read More
        </button>
    </div>
  )
}
