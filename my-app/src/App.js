import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Mentorhub from "./Components/Mentorhub";
import Explor from "./Components/Explor";
import Comunity from "./Components/Comunity";
import Peoples from "./Components/Peoples";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Mentorhub />
      <Explor />
      <Comunity />
      <Peoples />
      <Footer />
    </div>
  );
}

export default App;
