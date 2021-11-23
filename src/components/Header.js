import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="tittle">
                <h1>Asistencia</h1>
                <ul className="header-link">
                    <li><Link to='/addregistro'>
                    <button className="addreg">Registro</button>
                    </Link></li>
                    <li><Link to='/addtrabajador'>
                    <button className="addreg">Usuario</button>
                    </Link></li>
                </ul>
            </div>
        </div>
        
            
        
    );
}

export default Header;
