import React, { Component } from "react"
import { Botao } from "../assets/Botao"
import "./style.css"

import video from "../../img/video.mp4"

export class Servicos extends Component {

    render(){
        return(
            <section className="body-servicos">
                <section className="body-servicos_ciclo">
                    <div className="div-video">
                        <video preload="preload" muted className="video"  autoplay="autoplay" loop="loop" >
                            <source src={video} type="video/mp4"></source> 
                        </video>
                        <h1 className="div-video_titulo"> inteligência cibernética <br/>ao seu alcance™</h1>
                        <div className="div-video_plus">
                            <h2>+ COLETA</h2>
                            <h2>+ ANALISE</h2>
                            <h2>+ INVESTIGAÇÃO</h2>
                        </div>
                    </div>
                </section>
                <section className="div-segmentos">
                    <h1 className="div-segmentos_titulo">Soluções para cada segmento</h1>
                </section>
                <section class="servicos">
                    <section class="servico1">
                        <h2 class="servico-titulo">Governo</h2>
                        <p className="servico-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor non sapien nec blandit. Suspendisse potenti.</p>
                        <Botao conteudo="Saiba mais"/>
                    </section>
                    <section class="servico2">
                        <h2 class="servico-titulo">Infraestrutura</h2>
                        <p className="servico-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor non sapien nec blandit. Suspendisse potenti.</p>
                        <Botao conteudo="Saiba mais"/>
                    </section>
                    <section class="servico3">
                        <h2 class="servico-titulo">Empresas</h2>
                        <p className="servico-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor non sapien nec blandit. Suspendisse potenti.</p>
                        <Botao conteudo="Saiba mais"/>
                    </section>
                </section>
            </section>
        )
    }
}