import React, { Component } from "react"
import { Menu } from "../../components/painel/menu/Menu";
import RemoverApt from "../../components/painel/remover/Remover";


class paginaRemove extends Component {

  render(){
      return (
        <div className="painel-main">
            <Menu />
            <RemoverApt />
        </div>
    );
  }
}

export default paginaRemove;