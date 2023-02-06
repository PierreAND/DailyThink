import React, {useState, useEffect} from 'react'
import Card from "../../Components/Card/Card";
import APIManager from '../../services/api';
import { Link } from "react-router-dom";

function Sport() {

  const [sports, setSports] = useState ([])

  useEffect (()=>{
    const getSport = async () => {
      await APIManager.getAllSport().then((data) => setSports(data));
    }
    getSport().catch(console.err)
  }, [])
 



  return (
    <>
      
      <h1 id="cards"  className="home-title">Les Articles Sport</h1>
      <div className="container-cards">
        {sports.map((sport) => {
          return (
            <Card key={"article" + sport.id}>
              <h2 >{sport.title}</h2>
              <p className='card-date'>{sport.date}</p>
              <Link to={`/sport/${sport.title.replace(/\s+/g, "-").trim()}`}
              state={sport.content}
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