import React, { useState, useEffect } from "react"
import Axios from 'axios'
import "./style.css"

function RemoverApt() {

    const [id, setId] = useState('')
 
    const deleteApt = () => {
        Axios.delete(`http://localhost:3001/apt/delete/${id}`)
        alert(`${id} removida do monitoramento`)
    }

    return(
        <div className="main-cadastro">
            <div className="card-remove">
                <h1 className="main-texto1">Remover APT</h1>
                <form action="" className="form-remove">
                <input className="cadastro-input"  type="text" name="id" placeholder="ID" onChange={(e)=>{
                    setId(e.target.value)
                }}/>
                <button className="botao-cadastro" onClick={deleteApt}>Remover APT</button>
                
                </form>
            </div>  
        </div>
    )

}

export default RemoverApt