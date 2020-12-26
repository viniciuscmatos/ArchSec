import React, { Component } from "react"
import {Header} from "../../components/header/Header"
import {Footer} from "../../components/footer/Footer"
import {Servicos} from "../../components/servicos/Servicos"


class paginaServicos extends Component {

  render(){
      return (
        <div>
          <Header />
          <Servicos />
          <Footer />
        </div>
    );
  }
}

export default paginaServicos;
