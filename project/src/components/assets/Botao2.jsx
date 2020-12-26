import React, { Component } from "react"
import "./botao2.css"

export class Botao2 extends Component {
  render() {
    return <button className="botao2">{this.props.conteudo}</button>
  }
}