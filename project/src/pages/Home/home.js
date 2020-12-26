import React, { Component } from "react"
import {Header} from "../../components/header/Header"
import {Body} from "../../components/body/Body"
import {Footer} from "../../components/footer/Footer"

class Home extends Component {

  render(){
      return (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
    );
  }
}

export default Home;
