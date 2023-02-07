import React from 'react';
import { Link } from 'react-router-dom';
const Secciones = () => {
    return (
        <>
            <li className="nav-item">
            <Link className='nav-link' to={"/"}>Inicio</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Como curar tus Mates</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </>
    );
}

export default Secciones;
