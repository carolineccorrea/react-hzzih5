import React from "react";
import Personagem from "../Personagem";
import "./style.css";

const Card = (props) => {
    return <div className='card-con'>
        <h1>Nome: {props.personagem.name}</h1>
        <h1>Cor dos olhos: {props.personagem.eye_color}</h1>
    </div>
}

export default Card;