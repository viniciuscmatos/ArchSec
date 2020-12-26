import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home/home"
import paginaServicos from "./pages/Serviços/servicos"
import paginaLogin from "./pages/Login/login"
import paginaPainel from "./pages/Painel/painel"
import paginaCadastro from "./pages/Painel/cadastro"
import paginaMapa from "./pages/Painel/mapa"
import paginaRemove from "./pages/Painel/remove"

class Routes extends Component {

  render(){
      return(
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/servicos" component={paginaServicos} />
            <Route path="/login" component={paginaLogin} />
            <Route path="/painel" component={paginaPainel} />
            <Route path="/cadastro" component={paginaCadastro} />
            <Route path="/mapa" component={paginaMapa} />
            <Route path="/remove" component={paginaRemove} />
          </Switch>
        </BrowserRouter>
      )
  }
}

export default Routes