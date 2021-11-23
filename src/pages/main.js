import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import Listado from '../components/Listado';
import TrabajadoresLista from '../components/TrabajadoresLista';



const Main = () => {

    const [registros,setRegistro] = useState([]);
    const [trabajadores,setTrabajador] = useState([]);
    const [showList,setShowList]= useState(0);
    const [searchTerm,setSearchTerm]= useState("");
    const [searchResult, setSearchResult]= useState([]);

    const onSelected = async(id) =>{

        setShowList(id);
        const {listaTrabadores}= await fetchTrabajadoresByRegistro(id);
        setTrabajador(listaTrabadores);
    }

    const searchHandler =(searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm!==""){
            const newRegistroList = registros.filter((registro)=>{
                return Object.values(registro).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });

            setSearchResult(newRegistroList);
        }else{

            setSearchResult(registros);
        }

    }



    
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

    const fetchTrabajadoresByRegistro = async(id)=>{

        const res = await fetch(`http://127.0.0.1:3000/registros/${id}`);
        const data = await res.json();

        return data;
    }




    return (
        <div>
        <Header/>
        <Listado registros={searchTerm.length < 1 ? registros: searchResult} onSelect={onSelected} term={searchTerm} searchKeywork={searchHandler}/>
        {showList!=0 && <TrabajadoresLista trabajadores={trabajadores} />}
            
        </div>
    );
}

export default Main;
