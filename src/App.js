import React from 'react';
import Personagem from './components/Personagem';
import "./style.css";

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

                <ul>
                    {this.state.data.map(item => (
                        <li key={item.name}>
                            <div className="item">
                           <Personagem class="item" name={item.name} eyecolor={item.eye_color}></Personagem>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;