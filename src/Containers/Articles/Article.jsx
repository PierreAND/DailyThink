import React from "react";
import { useLocation } from "react-router-dom";

function Article(props) {
  const location = useLocation()
  console.log(location);

  return (
    <div className="article-content">
    <p>{location.state}</p>
    </div>
  );
}

export default Article;

