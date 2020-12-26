import React, { Component } from "react"
import "./botao.css"

export class Botao extends Component {
  render() {
    return <button className="botao">{this.props.conteudo}</button>
  }
}