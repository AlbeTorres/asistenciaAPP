import React,{useEffect,useState} from 'react';



import '../assets/styles/App.scss';
import Footer from '../components/Footer';
import Listado from '../components/Listado';
import Main from '../pages/main';

const App = () =>{

    const [registros,setRegistro] = useState([]);
    
    useEffect(()=>{
        const getregistros= async()=>{

            const registrosFromServer= await fetchRegistros();
            setRegistro(registrosFromServer);
            

        }

        getregistros();
        

    },[]);

    const fetchRegistros= async()=>{

        const res = await fetch("http://127.0.0.1:3000/registros");
        const data = await res.json();
        
        return data;
    }

    console.log(registros);
    
    return(<div className='App'>
                <Main/>
                <Listado registros={registros}/>
                <Footer/>
            
            </div>
    );}

export default App;