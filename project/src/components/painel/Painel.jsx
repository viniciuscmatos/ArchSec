import React, { Component } from "react"
import "leaflet/dist/leaflet.css"
import "./style.css"

import { Menu } from "./menu/Menu"
import ListaApt from "./lista/Lista"



export class Painel extends Component {
    render(){
        return(
            <div className="painel-main">
                <Menu />
                <ListaApt />
            </div>
        )
    }
}