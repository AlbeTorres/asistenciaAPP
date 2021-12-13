import React,{useEffect,useState} from 'react';
import TrabajadoresLista from './TrabajadoresLista';

const RegistroCrudElementForm = () => {

    const [trabajadores,setTrabajador] = useState([]);
    const [showTrabajadores,setShowTrabajadores]= useState(false);

    useEffect(()=>{

        const gettrabajadores= async()=>{

            const trabajadoresFromServer= await fetchTrabajadores();
            setTrabajador(trabajadoresFromServer);
            

        }

        gettrabajadores();
        
    },[]);

    const fetchTrabajadores= async()=>{

        const res = await fetch("http://127.0.0.1:3000/trabajadores");
        const data = await res.json();
        
        return data;
    }

    const onSelect=()=>{
        setShowTrabajadores(true);
    }

    return (
        <form>
            <input type="text" placeholder="trabajador" onSelect={onSelect}/>
            {showTrabajadores && <TrabajadoresLista trabajadores={trabajadores}/>}
            <input type="time" placeholder="Hora llegada"/>
            <input type="submit" value="Añadir"/>
            
        </form>
    )
}

export default RegistroCrudElementForm;
