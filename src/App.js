import React, { Component } from "react";
import Fruta from './assets/pitaya.jpg'
import './App.css';

class Informacoes extends Component {
  state = {
    humano: [
      {
        nome: "Andrêina",
        idade: 21,
        comidaFavorita: "Lasanha",
        musicas: ["23:43", "Malvadão", "Girassol"]
      }
    ]
  };

  render() {
    return (
      <div class="contain">
        <h1>Nome: {this.state.humano[0].nome}</h1>
        <h2>Idade: {this.state.humano[0].idade}</h2>
        <h3>ComidaFavorita: {this.state.humano[0].comidaFavorita}</h3>
        <ul>
          <li>23:43</li>
          <li>Malvadão</li>
          <li>Girassol</li>
        </ul>
        <img src={Fruta} class="intro-img" alt="fruta"/>
      </div>
    );
  }
}

export default Informacoes;
