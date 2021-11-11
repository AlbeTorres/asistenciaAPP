import React from 'react';



import '../assets/styles/App.scss';
import Footer from '../components/Footer';
import Listado from '../components/Listado';
import Main from '../pages/main';

const App = () =>(
    <div className='App'>
        <Main/>
        <Listado/>
        <Listado/>
        <Footer/>
        
    </div>
);

export default App;