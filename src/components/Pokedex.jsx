import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

class Pokedex extends Component {
  state = {};
  static defaultProps = {
    list: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    const { list, total, isWinner } = this.props;
    let title;
    if (isWinner) {
      title = <h3 className="winner">winning hand</h3>;
    } else {
      title = <h3 className="loser">losing hand</h3>;
    }
    return (
      <div className="row">
        <div className="col-10 mx-auto text-center py-3 text-capitalize Pokedex-set">
          {title}
          <p>total experience: {total}</p>
        </div>
        {list.map(pokemon => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
