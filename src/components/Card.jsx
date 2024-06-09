import React from "react";
import "./Card.css";
//importamos prop-types library de react
import PropTypes from "prop-types";

// aqui solo los lee los nombres y las imagenes de los lenguajes de programacion esde cards
const Card = ({ lang, img, fcolor, scolor}) => {
    //es para ver que tipos de datos usa cada variable en este caso lang y img en linea 7
    // console.log(PropTypes);
    return (
        // diseñando los cards desde el json cargado con variables fcolor y scolor de cards.json
        <div className="card" 
        
        style={{     
            background: "linear-gradient(to bottom, "+fcolor+","+scolor+")",
            
            
            }}>
            <img src={img} alt="lang.svg" />
            
            <h3>{lang}</h3>
        </div>
    );
};

//aqui se validan los tipos de dato de cada variable en este caso lang como string 
Card.propTypes = {
    Lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string,





}

export default Card;