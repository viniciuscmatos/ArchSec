import React, { Component } from "react"
import "./botao3.css"

export class Botao3 extends Component {

  constructor(props) {
    super(props);
    this.sayHello = this.validarLogin.bind(this);
  }

  validarLogin() {
    let email = document.getElementById("emailLogin").value
    let senha = document.getElementById("senhaLogin").value
    if(email === senha && email !== "") {
      alert("login realizado com sucesso")
      window.location.replace("http://localhost:3000/painel");
    } else {
      alert("Para logar, utilize login e senha iguais. Exemplo: Admin/Admin, MeuLogin/MeuLogin, etc.")
    }
  }
  
  render() {
    return <button className="botao3" id="botao-login" onClick={this.validarLogin}>{this.props.conteudo}</button>
  }
}