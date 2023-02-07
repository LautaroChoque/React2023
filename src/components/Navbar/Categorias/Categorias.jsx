import React from 'react';
import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <ul className="dropdown-menu">
              <li><Link className='nav-link categorias' to={"/category/1"}>Mates</Link></li>
              <li><Link className='nav-link categorias' to={"/category/2"}>Bombillas</Link></li>
              <li><Link className='nav-link categorias' to={"/category/3"}>Termos</Link></li>
              <li><Link className='nav-link categorias' to={"/category/4"}>Termos</Link></li>
            </ul>
        </li>
        
    );
}

export default Categorias;
