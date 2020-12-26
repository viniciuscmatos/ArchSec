import React, { useState } from "react"
import Axios from 'axios'
import "./style.css"


function FormCadastro() {

    const [id, setId] = useState('')
    const [nome, setNome] = useState('') 
    const [desc, setDesc] = useState('') 
    const [pais, setPais] = useState('')
    const [lat, setLat] = useState()
    const [long, setLong] = useState()

    const submitApt = () => {
        Axios.post('http://localhost:3001/apt/add', {id: id, name: nome, description: desc, country: pais, lat: lat, long: long})
    }

    return(
        <div className="main-cadastro">
            <div className="card-cadastro">
                <h1 className="main-texto1">Cadastro de APT</h1>
                <form action="" className="form-cadastro">
                <input className="cadastro-input"  type="text" name="id" placeholder="ID" onChange={(e)=>{
                    setId(e.target.value)
                }}/>
                <input className="cadastro-input" type="text" name="nome" placeholder="Nome" onChange={(e)=>{
                    setNome(e.target.value)
                }}/>
                <textarea className="cadastro-input" name="descricao" rows="5" placeholder="Descrição"onChange={(e)=>{
                    setDesc(e.target.value)
                }}></textarea>
                <input className="cadastro-input"  type="text" name="pais" placeholder="País de Origem" onChange={(e)=>{
                    setPais(e.target.value)
                }}/>
                <div className="div-latlong">
                    <input id="input-latlong"className="cadastro-input"  type="number" name="lat" placeholder="Latitude" onChange={(e)=>{
                        setLat(e.target.value)
                    }}/>
                    <input id="input-latlong" className="cadastro-input"  type="number" name="long" placeholder="Longitude" onChange={(e)=>{
                        setLong(e.target.value)
                    }}/>
                </div>
                <button className="botao-cadastro" onClick={submitApt}>Cadastrar APT</button>
                </form>
            </div>  
        </div>
    )

}

export default FormCadastro