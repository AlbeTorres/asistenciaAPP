import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import Listado from '../components/Listado';
import TrabajadoresLista from '../components/TrabajadoresLista';



const Main = () => {

    const [registros,setRegistro] = useState([]);
    const [trabajadores,setTrabajador] = useState([]);
    const [showList,setShowList]= useState(0);



    
    useEffect(()=>{
        const getregistros= async()=>{

            const registrosFromServer= await fetchRegistros();
            setRegistro(registrosFromServer);
            

        }
        const gettrabajadores= async()=>{

            const trabajadoresFromServer= await fetchTrabajadores();
            setTrabajador(trabajadoresFromServer);
            

        }

        getregistros();
        gettrabajadores();
        

    },[]);


    const fetchRegistros= async()=>{

        const res = await fetch("http://127.0.0.1:3000/registros");
        const data = await res.json();
        
        return data;
    }
    const fetchTrabajadores= async()=>{

        const res = await fetch("http://127.0.0.1:3000/trabajadores");
        const data = await res.json();
        
        return data;
    }



    console.log(registros);
    console.log(trabajadores);


    return (
        <div>
        <Header/>
        <Listado registros={registros}/>
        <TrabajadoresLista trabajadores={trabajadores}/>
            
        </div>
    );
}

export default Main;
