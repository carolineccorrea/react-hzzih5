import React from 'react';
import Personagem from './components/Personagem';
import "./style.css";
import Card from './components/Card'
import { CardList } from './components/Card-list';

class List extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res.results });
            });
    }

    render() {
        const {data} = this.state
        console.log(data);
        return (
            <div>
                <h1>Lista de Personagens</h1>
               <CardList personagem={this.state.data}/>
            </div>
        );
    }
}

export default List;