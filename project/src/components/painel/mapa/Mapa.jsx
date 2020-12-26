import React, { useState, useEffect } from "react"
import { Menu } from "../menu/Menu"
import { MapContainer,Marker,TileLayer, Popup } from "react-leaflet"
import Axios from 'axios'
import leaflet from "leaflet"
import 'leaflet/dist/leaflet.css'
import "./style.css"
import mapIconUrl from "../../../img/icon.svg"

const mapIcon = leaflet.icon({
  iconUrl: mapIconUrl,
  iconSize: [28,28],
  iconAnchor: [14,28],
  popupAnchor: [0,-20]
})

function Mapa() {

    const [listaApts, setListaApts] = useState([])

    useEffect(()=> {
        Axios.get('http://localhost:3001/apt/list').then((response)=>{
            setListaApts(response.data)          
        })
    },[])

        return(
        
            <div className="painel-main">
                <Menu />
                <MapContainer center={[0,0]} zoom={2.5} style={{width: '100%',height: '100%'}}>
                    
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmluaWNpdXN2c3ciLCJhIjoiY2tpZG1kZWU1MWtjMjJ6cXRnNDQ0amZlZyJ9.YyqAkWc-LRd_fldJ7nz73Q`} />
                    {listaApts.map(apt =>{
                        return (
                            <Marker icon={mapIcon} position={[apt.lat , apt.long]}>
                            <Popup closeButton={false} className="popup">
                                {apt.id} | {apt.name}
                            </Popup>
                            </Marker>
                        )
                    })} 
                </MapContainer>
            </div>
        )    
    }
export default Mapa