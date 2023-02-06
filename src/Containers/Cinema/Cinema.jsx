import React, {useState, useEffect} from 'react'
import Card from "../../Components/Card/Card";
import APIManager from '../../services/api';
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Cinema() {

  const [cinemas, setCinemas] = useState ([])

  useEffect (()=>{
    const getCinema = async () => {
      await APIManager.getAllCinema().then((data) => setCinemas(data));
    }
    getCinema().catch(console.err)
  }, [])
 



  return (
    <>
      
      <h1 id="cards"  className="home-title">Les Articles Cinema</h1>
      <div className="container-cards">
        {cinemas.map((cinema) => {
          return (
            <Card key={"article" + cinema.id}>
              <h2 >{cinema.title}</h2>
              <p className='card-date'>{cinema.date}</p>
              <Link to={`/cinema/${cinema.title.replace(/\s+/g, "-").trim()}`}
              state={cinema.content}
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


export default Cinema