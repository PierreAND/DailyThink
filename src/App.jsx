import NavBar from "./Components/NavBar/Navbar";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact"
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </>
  );
}

export default App;
