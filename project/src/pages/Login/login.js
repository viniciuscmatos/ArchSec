import React, { Component } from "react"
import {Header} from "../../components/header/Header"
import {Footer} from "../../components/footer/Footer"
import {Login} from "../../components/login/Login"


class paginaLogin extends Component {

  render(){
      return (
        <div>
          <Header />
          <Login />
          <Footer />
        </div>
    );
  }
}

export default paginaLogin;