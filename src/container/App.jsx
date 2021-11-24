import React from 'react';
import Footer from '../components/Footer';
import Main from '../pages/main';
import {Route,BrowserRouter,Switch} from 'react-router-dom'



import '../assets/styles/App.scss';
import TrabajadoresCRUD from '../pages/TrabajadoresCRUD';


const App = () =>{

    
    return(
    <div className='App'>
        <BrowserRouter>
            <Switch>
                <Route exact path= '/' component={Main}/>
                <Route exact path='/addtrabajador' component={TrabajadoresCRUD}/>

            </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
    );}

export default App;