import React from "react";
import { useLocation } from "react-router-dom";

function Article() {
  const location = useLocation()
  console.log(location);

  return (
    <div className="article-content">
      <h1>{location.pathname.replace(/\-/g, " ")}</h1>
    <p>{location.state}</p>
    </div>
  );
}

export default Article;

