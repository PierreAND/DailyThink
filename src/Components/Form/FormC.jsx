import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


function FormC() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    date: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();


    dispatch({
      type: "ADDCINEMA",
      payload: article
    })


    setArticle({
      title: "",
      body: "",
      date: ""
    })
  };
console.log(article)
  const handleChange = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    }
    if (e.target.classList.contains("inp-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
    if (e.target.classList.contains("inp-date")) {
      const newObjState = { ...article, date: e.target.value };
      setArticle(newObjState);
      }
    }
  
  return (
    <>
      <h1 className="title-form">Cinema</h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Nom</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={article.title}
          className="inp-title"
          placeholder="Titre"
        />
        <label htmlFor="article">Article</label>
        <textarea
          id="article"
          onChange={handleChange}
          value={article.body}
          className="inp-body"
          placeholder="Votre article"
        ></textarea>
        <label htmlFor="date">Date</label>
        <input dateTime=""
        onChange={handleChange}
        value={article.date}
        className="inp-date"
        placeholder="Date du jour"></input>
        <button>Envoyez l'article</button>
      </form>
    </>
  );
}

export default FormC;
