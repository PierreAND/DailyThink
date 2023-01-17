import NavBar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact"
import {Routes, Route} from "react-router-dom";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Article from "./Containers/Article/Article";

function App() {
  return (
    <>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<AddArticle />} />
        <Route path="/articles/:slug" element={<Article/>} />
      </Routes>
     
    </>
  );
}

export default App;
