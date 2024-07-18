import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pizzaria do Pedro </h1>
        <p> PIZZA PARA TODOS OS GOSTOS </p>
        <button> Peça Agora </button>
      </div>
    </div>
  );
}

export default Home;
