import React from "react";
import "./style.css";
import Card from "./components/Card";
import { Personagem } from "./components/Personagem";

class List extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.results });
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <h1>Lista de Personagens</h1>
        <Personagem personagem={this.state.data} />
      </div>
    );
  }
}

export default List;
