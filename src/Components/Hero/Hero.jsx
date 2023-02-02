import React from 'react'
import {Link} from "react-router-dom"
import { useCallback } from 'react';
import Particles from 'react-particles';
import {loadFull} from 'tsparticles'

const  Hero = () => {

const particlesInit = useCallback(async engine => {
  console.log(engine);
  // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);

return (
<>
<section className="home">
    
    <h1>DailyThink</h1>
    <ul>
      <Link to="/musique">Musique</Link>
      <Link to="/cinema">Cinema</Link>
      <Link to="/sport">Sport</Link>
      <Link to="/actu">Actu</Link>
      <Link to="/philo"> Philo</Link>
    </ul>
    <a href='#foot' className="floating-btn">
      <img src="/images/chevron-down.svg" />
    </a>
    <div className="btn-eggs">
        <a href="btn"><Link to="/eggs">/</Link></a>
    </div>
    /
  </section>
  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          background: {
              color: {
                  value: "#000",
              },
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#ffffff",
              },
              links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 80,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }}
  />
 </> 

);
};

export default Hero;