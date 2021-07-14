import React, {Component} from 'react';
import CardNota from './CardNota';

export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
            {Array.of('Trabalho 1', 'Trabalho 2', 'Trabalho 3').map(
              categoria => {
                return (
                  <li>
                    <div> {categoria} </div>
                  <CardNota />
               </li>
                )
              }
            )}
               
            </ul>
        );
    }
}
