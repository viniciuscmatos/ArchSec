import React, { Component } from "react"
import { Botao } from "../assets/Botao"
import { Botao2 } from "../assets/Botao2"
import { CardCliente} from "./cardClientes/CardCliente"
import "./style.css"

import imgB3 from "../../img/b3.png"
import imgLhm from "../../img/lhm.png"
import imgWeg from "../../img/weg.png"

export class Body extends Component {

    render(){
        return(
            <main className="main">
                <section className="main-home">
                    <h2 className="main-texto1">Cyber Intelligence</h2>
                    <h4 className="main-texto2">~Insira uma frase criativa sobre o mercado que estamos inseridos<br/> e porque somos melhores que a concorrência~</h4>
                    <Botao conteudo="Conheça nossos serviços"/>
                </section>
                <section className="main-clientes">
                    <h1 className="main-clientes_titulo">Clientes satisfeitos. Histórias incríveis.</h1>
                    <div class="div-cardsclientes">
                        <CardCliente name="B3" img={imgB3} />
                        <CardCliente name="Lockheed Martin" img={imgLhm}/>
                        <CardCliente name="WEG" img={imgWeg}/>
                    </div>
                    <div className="div-botaoClientes">
                        <Botao2 conteudo="veja outros clientes" />
                    </div>
                </section>
            </main>
        )
    }
}