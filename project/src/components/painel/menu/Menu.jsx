import React, { Component } from "react"

import "./style.css"
import logo from "../../../img/logo-delta.png"

import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export class Menu extends Component {

    render(){

        return(
                <div className="painel-menu">
                    <div>
                        <h1 className="main-texto1">Olá, xxxx.</h1>
                        <ul className="painel-menu_lista">
                            <a href="/painel"><li className="painel-menu-nav"><div className="div-icon"><ListIcon/></div>Listar APTs</li></a>
                            <a href="/cadastro"><li className="painel-menu-nav"><div className="div-icon"><AddIcon/></div>Cadastrar</li></a>
                            <a href="/remove"><li className="painel-menu-nav"><div className="div-icon"><DeleteForeverIcon/></div>Remover</li></a>
                            <a href="/mapa"><li className="painel-menu-nav"><div className="div-icon"><MapIcon/></div>Mapa</li></a>
                            <a href="/login"><li className="painel-menu-nav"><div className="div-icon"><ExitToAppIcon/></div>Sair</li></a>
                        </ul>
                    </div>
                    <div className="painel-menu_div-logo">
                        <img className="logo-delta" src={logo} alt=""/>
                    </div>
                </div>
        )
    }
}