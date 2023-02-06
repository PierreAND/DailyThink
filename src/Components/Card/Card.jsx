import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/feathersjs/feathersjs-original.svg" className='img-article' />
       <p>{props.children}</p>
    </div>
  )
}

export default Card