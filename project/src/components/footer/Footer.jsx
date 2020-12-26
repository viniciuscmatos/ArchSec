import React, { Component } from "react"
import "./style.css"

import imgInstagram from "../../img/instagram.png"
import imgLinkedin from "../../img/linkedin.png"
import imgTwitter from "../../img/twitter.png"
import imgFacebook from "../../img/facebook.png"
import logodelta from "../../img/logo-delta.png"

export class Footer extends Component {

    render(){
        return(
            <footer className="footer">
            <section className="footer-one">
                <ul className="footer-lista">
                    <h4 className="lista-nome">Acesso Rápido</h4>
                    <li className="item-lista-footer">cyber intelligence</li>
                    <li className="item-lista-footer">proteção de dados</li>
                    <li className="item-lista-footer">cursos</li>
                    <li className="item-lista-footer">artigos</li>
                    <li className="item-lista-footer">sobre nós</li>
                </ul>
                <ul className="footer-lista">
                    <h4 className="lista-nome">carreiras</h4>
                    <li className="item-lista-footer">trabalhe conosco</li>
                    <li className="item-lista-footer">escritórios</li>
                    <li className="item-lista-footer">contato</li>
                </ul>
                <ul className="footer-lista">
                    <h4 className="lista-nome">produtos</h4>
                    <li className="item-lista-footer">telecomunicações</li>
                    <li className="item-lista-footer">network intelligence</li>
                    <li className="item-lista-footer">auditorias</li>
                    <li className="item-lista-footer">monitoramento</li>
                </ul>
                <ul className="footer-lista">
                    <h4 className="lista-nome">ArchSec Systems Inc.</h4>
                    <li className="item-lista-footer">Av. Embaixador Vitorino Sarek, 1701</li>
                    <li className="item-lista-footer">Torre D, 10º Andar, Florianópolis – SC</li>
                    <li className="item-lista-footer">+55 (48) XXXX-XXXX</li>
                    <section className="social-media">
                        <img className="social-media-icon" src={ imgInstagram } alt="" />
                        <img className="social-media-icon"  src={ imgLinkedin } alt=""/>
                        <img className="social-media-icon"  src={ imgTwitter } alt=""/>
                        <img className="social-media-icon"  src={ imgFacebook} alt=""/>
                    </section>
                </ul>
            </section>
            <section className="footer-two">
                    <img className="footer-logo" src={logodelta} alt=""/>
                    <span className="footer-logo-texto" >Copyright 2020 © ArchSec Systems Inc.</span>
            </section>
        </footer>
        )
    }
    
}