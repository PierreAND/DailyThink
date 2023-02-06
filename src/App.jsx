import NavBar from "./Components/NavBar/Navbar";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact"
import Musique from "./Containers/Musique/Musique";
import Sport from "./Containers/Sport/Sport";
import Cinema from "./Containers/Cinema/Cinema";
import Philo from "./Containers/Philo/Philo";
import Actu from "./Containers/Actu/Actu";
import Eggs from "./Containers/Eggs/Eggs";
import About from "./Containers/About/About";

import {Routes, Route} from "react-router-dom";
import Article from "./Containers/Articles/Article";


function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/musique" element={<Musique/>} />
        <Route path="/sport" element={<Sport/>} />
        <Route path="/cinema" element={<Cinema/>} />
        <Route path="/philo" element={<Philo/>} />
        <Route path="/actu" element={<Actu/>} />
        <Route path="/sport/:slug" element={<Article/>} />
        <Route path="/cinema/:slug" element={<Article/>} />
        <Route path="/philo/:slug" element={<Article/>} />
        <Route path="/actu/:slug" element={<Article/>} />
        <Route path="/musique/:slug" element={<Article/>} />
        <Route path="/eggs" element={<Eggs />} />
      </Routes>
     
    </>
  );
}

export default App;
