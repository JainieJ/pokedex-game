import React, { Component } from "react";
import Pokedex from "./Pokedex";
import "./PokeGame.css";

class PokeGame extends Component {
  state = {};
  getRandomSet = arr => {
    const middle = Math.floor(arr.length / 2);
    // dividing the arr into two unique arrs with random pokemons
    let firstArray = [];
    while (firstArray.length < middle) {
      const index = Math.floor(Math.random() * arr.length);
      if (!firstArray.includes(arr[index])) {
        firstArray.push(arr[index]);
      }
    }
    const secondArray = arr.filter(item => {
      if (!firstArray.includes(item)) {
        return item;
      }
    });
    //claculating total experience for each array
    const totalFirst = this.getTotalExperience(firstArray);
    const totalSecond = this.getTotalExperience(secondArray);
    //returning components with info on who is the winner
    if (totalFirst > totalSecond) {
      return (
        <>
          <Pokedex list={firstArray} total={totalFirst} isWinner />
          <Pokedex list={secondArray} total={totalSecond} />
        </>
      );
    } else {
      return (
        <>
          <Pokedex list={firstArray} total={totalFirst} />
          <Pokedex list={secondArray} total={totalSecond} isWinner />
        </>
      );
    }
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
        <div className="container-fluid" className="PokeGame">
          {this.getRandomSet(list)}
        </div>
      </section>
    );
  }
}

export default PokeGame;
