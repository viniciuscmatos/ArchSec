import React, { Component } from "react"
import "./loginsocialmedia.css"


export class LoginSocialMedia extends Component {
  render() {
    return (
        <div className="div-login-social">
        <div className="login-social">
            <img className="login-social-icon" src={this.props.icon} alt=""/>
            <span>Entrar com {this.props.name}</span>
        </div>
    </div>
    )
  }
}