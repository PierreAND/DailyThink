import React, {useState, useEffect} from 'react'
import Card from "../../Components/Card/Card";
import APIManager from '../../services/api';
import { Link } from "react-router-dom";

function Philo() {

  const [philos, setPhilos] = useState ([])

  useEffect (()=>{
    const getPhilo = async () => {
      await APIManager.getAllPhilo().then((data) => setPhilos(data));
    }
    getPhilo().catch(console.err)
  }, [])
 



  return (
    <>
      
      <h1 id="cards"  className="home-title">Les Articles Philo</h1>
      <div className="container-cards">
        {philos.map((philo) => {
          return (
            <Card key={"article" + philo.id}>
              <h2 >{philo.title}</h2>
              <p className='card-date'>{philo.date}</p>
              <Link to={`/philo/${philo.title.replace(/\s+/g, "-").trim()}`}
              state={philo.content}
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