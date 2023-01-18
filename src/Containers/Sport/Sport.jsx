import React from 'react'
import Card from "../../Components/Card/Card";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Sport() {

  const { articles } = useSelector((state) => ({
    ...state.sportReducer,
  }));



  return (
    <>
      
      <h1 id="cards" className="home-title">Les Articles du Blog</h1>
      <div className="container-cards">
        {articles.map((item) => {
          return (
            <Card key={uuidv4()}>
              <h2>{item.title}</h2>
              <Link to={`/articles/${item.title.replace(/\s+/g, "-").trim()}`}
              state={item.body}
              >
                Lire l'article
              </Link>
            </Card>
            
          );
        })}
      </div>
    </>
  );
}


export default Sport