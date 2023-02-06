import React, {useState, useEffect} from 'react'
import Card from "../../Components/Card/Card";
import APIManager from '../../services/api';
import { Link } from "react-router-dom";

function Musique() {

  const [musiques, setMusiques] = useState ([])

  useEffect (()=>{
    const getMusique = async () => {
      await APIManager.getAllMusique().then((data) => setMusiques(data));
    }
    getMusique().catch(console.err)
  }, [])
 



  return (
    <>
      
      <h1 id="cards"  className="home-title">Les Articles Musique</h1>
      <div className="container-cards">
        {musiques.map((musique) => {
          return (
            <Card key={"article" + musique.id}>
              <h2 >{musique.title}</h2>
              <p className='card-date'>{musique.date}</p>
              <Link to={`/musique/${musique.title.replace(/\s+/g, "-").trim()}`}
              state={musique.content}
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


export default Musique