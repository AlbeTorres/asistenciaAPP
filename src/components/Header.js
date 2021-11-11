import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => {
    return (
        <div className="header">
            <h1>Asistencia</h1>
            
                <ul className="header-link">
                    <li><a>Agregar Registro</a></li>
                    <li><a>Agregar Usuario</a></li>
                </ul>
        </div>
            
        
    );
}

export default Header;
