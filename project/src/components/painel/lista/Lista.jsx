import React, { useState, useEffect } from "react"
import Axios from 'axios'
import "./style.css"


function ListaApt() {

    const [listaApts, setListaApts] = useState([])

    useEffect(()=> {
        Axios.get('http://localhost:3001/apt/list').then((response)=>{
            setListaApts(response.data)          
        })
    },[])

    return(
        <div className="main-lista">
            <div className="card-lista">
            <h1 className="main-texto1">APTs em monitoramento</h1>
            <table className="table-apts">
                <thead>
                    <tr className="head-tabela">
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>País de Origem</td>
                    </tr>
                </thead>
                {listaApts.map(apt => {
                return(
                    <tbody>
                        <tr>
                        <td className="linha-tabela">{apt.id}</td>
                        <td className="linha-tabela">{apt.name}</td>  
                        <td className="linha-tabela">{apt.description}</td>
                        <td className="linha-tabela">{apt.country}</td> 
                        </tr>
                    </tbody>
                )})}
            </table>
            </div>
        </div>
    )
}
export default ListaApt