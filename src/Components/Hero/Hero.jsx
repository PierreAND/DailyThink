import React from 'react'

function Hero() {
  return (
    <section className="home">
    
    <h1>DailyThink</h1>
    <ul>
      Sport
      Cinema
      Musique
      Actu
      Philo
    </ul>
    <a href='#cards' className="floating-btn">
      <img src="/public/images/chevron-down.svg" />
    </a>
  </section>
  )
}

export default Hero