import React from "react";
import { Ingredientes } from "./Ingredients";
import { Receita } from "./Recipe";


export class Culinaria extends React.Component {
  constructor() {
    super()
    this.state = {
      ingredientes : [
        'cenoura',
        'ovo',
        'farinha',
        'óleo',
        'chocolate',
        'uva',
        'maça'
      ]
    }
  }

  render() {
    const receitaBolo = this.state.ingredientes.filter(
      ingrediente => ingrediente !== 'uva' && ingrediente !== 'maça'
    )

    return(
      <div>
        <Ingredientes ingredientes={this.state.ingredientes} />
        <Receita nome="Bolo de Cenoura" ingredientes={receitaBolo} />
      </div>
    )
  }
}