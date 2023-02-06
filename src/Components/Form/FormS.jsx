import APIManager from "../../services/api";
import React, { useEffect, useState } from 'react';

function FormS() {
  const [ title , setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")



const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    title: title,
    content: content,
    date: date,
  };

  try {
    const response = await APIManager.newSport(data)
     console.log(response.data)
     }catch (err) {
      console.error(err)

  }
}
  return (
   <>
   <h1 className="title-form">Sport</h1>
    <form onSubmit={handleSubmit} className="container-form">
      <label htmlFor="title">Title </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        id="title"
        placeholder="Titre"
        />
       
       <label htmlFor="content">Content </label>
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        id="content"
        placeholder="Texte">

        </textarea>
        
       
      <label htmlFor="password">Date</label>
      
      <input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        type="text"
        id="date"
        placeholder="date"
        />
 
       
    
      <button>Envoyer</button>
    </form>
   
   
   
   
   </>
  )
}

export default FormS


