import React from 'react';
import "./style.css";

class Personagem extends React.Component {
    render() {
      return( 
        <div>
        <h1>NOME..:{this.props.name}</h1>
        <h1>COR DOS OLHOS..:{this.props.eyecolor}</h1>
      </div>
     )
    }
  }

  export default Personagem;