import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./PokeGame.css";

class PokeGame extends Component {
  state = {};
  getRandomSet = arr => {
    //getting random sets of pokemons
    let firstArray = [];
    let secondArray = [...arr];
    while (firstArray.length < secondArray.length) {
      const index = Math.floor(Math.random() * secondArray.length);
      const randomPokemon = secondArray.splice(index, 1)[0];
      firstArray.push(randomPokemon);
    }
    //claculating total experience for each array
    const totalFirst = this.getTotalExperience(firstArray);
    const totalSecond = this.getTotalExperience(secondArray);
    //returning components with info on who is the winner
    return (
      <>
        <Pokedex
          list={firstArray}
          total={totalFirst}
          isWinner={totalFirst > totalSecond}
        />
        <Pokedex
          list={secondArray}
          total={totalSecond}
          isWinner={totalSecond > totalFirst}
        />
      </>
    );
  };
  getTotalExperience = arr => {
    const total = arr.reduce((acc, current) => {
      acc = acc + current.base_experience;
      return acc;
    }, 0);
    return total;
  };
  render() {
    const list = [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ];
    return (
      <section>
        <div className="container-fluid PokeGame">
          {this.getRandomSet(list)}
        </div>
      </section>
    );
  }
}

export default PokeGame;
