import React, { Component } from "react";
import "./PokeCard.css";

class PokeCard extends Component {
  state = {};
  getPokeImage = number => {
    const stringified = String(number);
    switch (stringified.length) {
      case 3:
        return stringified;
      case 2:
        return `0${stringified}`;
      case 1:
        return `00${stringified}`;
      default:
        return undefined;
    }
  };
  render() {
    const {
      pokemon: { id, name, type, base_experience }
    } = this.props;
    return (
      <div className="col-3 mx-auto text-center">
        <div className="card PokeCard">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div className="PokeCard-img-container">
              <img
                className="PokeCard-img"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.getPokeImage(
                  id
                )}.png`}
                alt="pokemon"
              />
            </div>
            <p className="card-text">Type: {type}</p>
            <p className="card-text">EXP: {base_experience}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeCard;
