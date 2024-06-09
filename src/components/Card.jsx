import React from "react";
import "./Card.css";

// aqui solo los lee los nombres y las imagenes de los lenguajes de programacion esde cards
const Card = ({ lang, img}) => {
    return (
        <div className="card">
            <img src={img} alt="lang.svg" />
            
            <h3>{lang}</h3>
        </div>
    );
};
export default Card;