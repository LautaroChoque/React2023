import React from 'react';
import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
        
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <ul className="dropdown-menu">
              <li><Link className='nav-link categorias' to={"/category/mates"}>Mates</Link></li>
              <li><Link className='nav-link categorias' to={"/category/bombillas"}>Bombillas</Link></li>
              <li><Link className='nav-link categorias' to={"/category/termos"}>Termos</Link></li>
              <li><Link className='nav-link categorias' to={"/category/yerbas"}>Yerbas</Link></li>
            </ul>
        </li>
        
    );
}

export default Categorias;
