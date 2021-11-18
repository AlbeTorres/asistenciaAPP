import React from 'react';
import Footer from '../components/Footer';
import Main from '../pages/main';
import {Route,BrowserRouter,Switch} from 'react-router-dom'



import '../assets/styles/App.scss';


const App = () =>{

    
    return(<div className='App'>
    <BrowserRouter>
        <Switch>
            <Route exact path= '/main' component={Main}/>

        </Switch>
    </BrowserRouter>
    <Footer/>
            
            </div>
    );}

export default App;