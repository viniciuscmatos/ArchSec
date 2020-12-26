import React, { Component } from "react"
import {Botao3} from "../assets/Botao3"
import {LoginSocialMedia} from "../assets/LoginSocialMedia"
import "./style.css"
import iconFacebook from "../../img/facebook-login.png"
import iconApple from "../../img/apple-login.png"

export class Login extends Component {

    render(){
        return(
            <div className="main-login">
                <div className="card-login">
                    <h1 className="titulo-login">Acesse sua conta</h1>
                    <LoginSocialMedia name="Facebook" icon={iconFacebook}/>
                    <LoginSocialMedia name="Apple" icon={iconApple}/>
                    <span className="span-login">ou</span>
                    <div className="div-login-input">
                        <input className="login-input" id="emailLogin" type="text" placeholder="E-mail"/>
                    </div>
                    <div className="div-login-input">
                        <input className="login-input" id="senhaLogin" type="password" placeholder="Senha"/>
                    </div>
                    <span className="span-login">Esqueceu a senha?</span>
                    <div className="div-botao-login">
                        <Botao3 conteudo="Entrar" />    
                    </div>
                    
                </div>
            </div>
        )
    }
}