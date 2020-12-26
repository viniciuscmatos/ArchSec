import React, { Component } from "react"
import  Mapa  from "../../components/painel/mapa/Mapa";
import "leaflet/dist/leaflet.css"

class paginaMapa extends Component {
  
  render(){

      return (
        <div className="">
                <Mapa />
        </div>
    );
  }
}

export default paginaMapa;