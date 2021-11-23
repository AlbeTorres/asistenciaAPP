import React,{useRef} from 'react';
import "../assets/styles/components/Listado.scss"
import Registro from './Registro';
import {FaSearch} from "react-icons/fa";


const Listado = ({registros, onSelect, term,searchKeywork}) => {

    const inputEl= useRef("");
    
    const getSearchTerm=()=>{
        searchKeywork(inputEl.current.value);
    }

    return (
        <div className="l-container">
            <div className="search">
                <FaSearch className="search_icon"/>
                <input ref={inputEl}  type="text" className="prompt" placeholder="Buscar Registro" value={ term } 
                onChange={ getSearchTerm }  />
            </div>
            
            {
                registros.length > 0 ?

            <div className="listado">
                {registros.map((registro)=>(
                    <Registro key={registro._id} registro={registro} onSelect={onSelect}/>
                ))} 
            </div>

            : 
            <h3 className="">No hay registros de ese dia</h3>
            }
            
        </div>
    )
}

export default Listado;
