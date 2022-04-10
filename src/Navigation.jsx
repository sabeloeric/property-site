import React from 'react'

function navigation() {
  return (
    <div className="navigation">
        <img src="src/images/logo.svg" alt="logo"/>
        <div className='navigation__menu'>
            <a className='navigation__link' href='/'>Home</a>
            <a className='navigation__link' href='#'>Property Search</a>
            <a className='navigation__link' href='#'>Tools</a>
            <a className='navigation__link' href='#'>About</a>
            <a className='navigation__link' href='#'>Contact</a>
        </div>
    </div>
  )
}

export default navigation
