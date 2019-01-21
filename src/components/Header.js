import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/pnblogo.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Pooch & Booch</strong>
          </h1>
          <h1>A Local Microbrewery</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
