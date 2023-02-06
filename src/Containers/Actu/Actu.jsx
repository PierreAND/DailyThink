import React, {useState, useEffect} from 'react'
import Card from "../../Components/Card/Card";
import APIManager from '../../services/api';
import { Link } from "react-router-dom";

function Actu() {

  const [actus, setActus] = useState ([])

  useEffect (()=>{
    const getActu = async () => {
      await APIManager.getAllActu().then((data) => setActus(data));
    }
    getActu().catch(console.err)
  }, [])
 



  return (
    <>
      
      <h1 id="cards"  className="home-title">Les Articles d'Actualité</h1>
      <div className="container-cards">
        {actus.map((actu) => {
          return (
            <Card key={"article" + actu.id}>
              <h2 >{actu.title}</h2>
              <p className='card-date'>{actu.date}</p>
              <Link to={`/actu/${actu.title.replace(/\s+/g, "-").trim()}`}
              state={actu.content}
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


export default Actu