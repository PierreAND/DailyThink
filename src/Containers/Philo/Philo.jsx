import React from 'react'
import Card from "../../Components/Card/Card";

import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Philo() {

  const { articles } = useSelector((state) => ({
    ...state.philoReducer 
  }));



  return (
    <>
      
      <h1 id="cards"  className="home-title">Les Articles Philos</h1>
      <div className="container-cards">
        {articles.map((item) => {
          return (
            <Card key={uuidv4()}>
              <h2 >{item.title}</h2>
              <p className='card-date'>{item.date}</p>
              <Link to={`/philos/${item.title.replace(/\s+/g, "-").trim()}`}
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


export default Philo