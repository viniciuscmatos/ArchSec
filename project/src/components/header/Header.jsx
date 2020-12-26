import React, { Component } from "react"
import "./style.css"

import logo from "../../img/logo.png"

export class Header extends Component {

    render(){
        return(
            <header className="header">
                <nav className="menu">
                    <img className="logo" src={logo} alt=""/>
                    <ul className="menu-lista">
                        <a href="/"><li className="menu-item">home</li></a>
                        <a href="/servicos"><li className="menu-item">serviços</li></a>
                        <li className="menu-item">casos</li>
                        <div class="dropdown">
                            <li  className="menu-item" id="dropbtn">carreira</li >
                            <div class="dropdown-content">
                                <a className="menu-item" href="#">Lorem 1</a>
                                <a className="menu-item" href="#">Lorem 2</a>
                                <a className="menu-item" href="#">Lorem 3</a>
                                <a className="menu-item" href="#">Lorem 4</a>
                            </div>
                        </div>
                        <a href="/login"><button className="login">login</button></a>
                    </ul>
                </nav>
            </header>
        )
    }
    
}