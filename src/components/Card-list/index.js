import React from 'react';
import Card from '../Card'
import "./style.css";
export const CardList = props =>(
    <div className="card-list">
        {props.personagem.map(personagem =>(
           <p><Card key={personagem.name} personagem={personagem} eye_color={personagem.eye_color}/> </p>
        ))}
    </div>
)

