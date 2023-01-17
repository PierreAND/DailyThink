import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import articleReducer from "../../redux/articles/articleReducer";

function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();


    dispatch({
      type: "ADDARTICLE",
      payload: article
    })


    setArticle({
      title: "",
      body: ""
    })
  };

  const handleChange = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    }
    if (e.target.classList.contains("inp-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };
console.log(article)
  return (
    <>
      <h1 className="title-form">Ecris ton article</h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Nom</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={article.title}
          className="inp-title"
          placeholder="Votre nom"
        />
        <label htmlFor="article">Article</label>
        <textarea
          id="article"
          onChange={handleChange}
          value={article.body}
          className="inp-body"
          placeholder="Votre article"
        ></textarea>
        <button>Envoyez l'article</button>
      </form>
    </>
  );
}

export default Form;
