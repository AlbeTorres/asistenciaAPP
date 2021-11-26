import React,{useEffect, useState} from 'react';
import TrabajadoresForm from '../components/TrabajadoresForm';
import TrabajadoresHeader from '../components/TrabajadoresHeader';
import TrabajadoresLista from '../components/TrabajadoresLista';



const TrabajadoresCRUD = () => {
    const [trabajadores,setTrabajador] = useState([]);
    const [showAddWorker, setShowAddWorker]= useState(false);

    
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


    const addWorker =async(trabajador)=>{

        const res = await fetch("http://127.0.0.1:3000/trabajadores",{method:'POST', headers:{'Content-type':'application/json'},body:JSON.stringify(trabajador)});
        
        const data= await res.json();
        console.log(data);

        setTrabajador([...trabajadores,data]);

    }

    return (
        <div className='trabajadorcrud'>
            <TrabajadoresHeader showAddWorker={()=>setShowAddWorker(!showAddWorker)} showAdd={showAddWorker}/>
            {showAddWorker && <TrabajadoresForm onAdd={addWorker}/>}
            
            <TrabajadoresLista trabajadores={trabajadores}/>
            
        </div>
    );
}

export default TrabajadoresCRUD;
