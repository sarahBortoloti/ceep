import React, { Component } from 'react';

export default class FormularioDeCadastro extends Component {

    render() {
        return (
            <form>
            <input type="text" placeholder="Titulo" />
            <textarea placeholder="Escreva sua nota"></textarea> 
            <button>Criar nota </button>
          </form>
        )
    }
}