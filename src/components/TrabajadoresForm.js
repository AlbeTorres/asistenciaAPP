import React,{useState} from 'react';
import '../assets/styles/components/TrabajadoresForm.scss';


const TrabajadoresForm = ({onAdd}) => {
    const [name,setName]= useState("");

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!name){
            alert("Debes escribir el nombre del Trabajador");
            return
        }

        onAdd({name});
        setName("");

    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="tittle-form">Añadir trabajador:</label>
            <div className="form-container">
                <input type="text" placeholder="Nombre del Trabajador" className="workerinput" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="submit" className="workersubmit" value="Añadir"/>
            </div>
        </form>
            
    );
}

export default TrabajadoresForm;
