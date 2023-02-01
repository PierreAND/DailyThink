import React from 'react'
import { useCallback } from 'react';
import Particles from 'react-particles';
import {loadFull} from 'tsparticles'

const About = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

return (
  <>
  <div className="about">

<p>"DailyThink est un blog hebdomadaire dans lequel je m'exprimerai sur des sujets divers et variés. Je cherche à travers ce blog a mettre en avant mes gouts sur certaines choses. Les messages qui y seront exprimés n'ont pour but que de divertir les gens qui les partageronts ou ceux qui trouveront plaisir a les réfuter ! Il y aura très peu d'articles a titre purement informatifs, même lorque je traiterai de sujet comme le sport, ils seront abordés avec mon point de vue.
J'ai un attrait particulier pour le passé surtout en ce qui concerne la musique et le cinéma ! Le passé est pour moi un voyage emouvant d'une chose qui n'est plus mais qui est pourtant bien là ! La construction de toute reflexion est purement historique, nous sommes des êtres historiques et tout ce qui émane de nos sociétes (musique, politique, cinema, philosophie ....) et fait de, dans et par le temps !"
</p>

</div>
 
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

export default About ;