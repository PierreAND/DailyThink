import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/feathersjs/feathersjs-original.svg" className='img-article' />
       {props.children}
    </div>
  )
}

export default Card