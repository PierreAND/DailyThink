import React from 'react'
import {Link} from "react-router-dom"

function Hero() {
  return (
    <section className="home">
    
    <h1>DailyThink</h1>
    <ul>
      <Link to="/musique">Musique</Link>
      <Link to="/cinema">Cinema</Link>
      <Link to="/sport">Sport</Link>
      <Link to="/actu">Actu</Link>
      <Link to="/philo"> Philo</Link>
    </ul>
    <a href='#cards' className="floating-btn">
      <img src="/images/chevron-down.svg" />
    </a>
    <button className='btn-eggs'><Link to="/eggs">*</Link></button>
  </section>
  )
}

export default Hero