import {Link} from "react-router-dom"
import React from 'react'
import { useState, useEffect } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);
const [largeur, setLargeur] = useState(window.innerWidth);

const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

useEffect(()=> {

  const changeWidth = () => {
    setLargeur(window.innerWidth);
  }
window.addEventListener("resize", changeWidth);


  return () => {
    window.removeEventListener("resize", changeWidth);
  }
}, [])



  return (
    <nav>
      {(toggleMenu ||largeur > 500) && (

        <ul className="liste">
  <li className="items"><Link to="/">Accueil</Link></li>
  <li className="items"><Link to="/about">About</Link></li>
  <li className="items"><Link to="/contact">Contact</Link></li>
  
 </ul>
   )}
 <button onClick={toggleNav} className="btn-burger"><GiHamburgerMenu/></button>
 </nav>
 
  )
}

export default Navbar;