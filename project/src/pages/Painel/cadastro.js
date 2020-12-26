import React, { Component } from "react"
import FormCadastro from "../../components/painel/cadastro/FormCadastro";
import { Menu } from "../../components/painel/menu/Menu";


class paginaCadastro extends Component {

  render(){
      return (
        <div className="painel-main">
            <Menu />
            <FormCadastro />
        </div>
    );
  }
}

export default paginaCadastro;