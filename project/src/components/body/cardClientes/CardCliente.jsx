import React, { Component } from "react"
import "./style.css"

export class CardCliente extends Component{

  render(){
    
    return(
      <div className="cardclientes">
        <div className="cardclientes-logo-div">
          <img className="cardclientes-logo" src={this.props.img} alt=""/>
        </div>
        <h1 className="cardclientes-nome">{this.props.name}</h1>
        <p className="cardclientes-case">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor non sapien nec blandit. Suspendisse potenti. Nulla ultrices interdum neque a pellentesque. Praesent at faucibus tortor. </p>
      </div>
    )
  }
}

