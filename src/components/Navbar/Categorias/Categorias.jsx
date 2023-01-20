import React from 'react';

const Categorias = () => {
    return (
        
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Mates</a>
              <a className="dropdown-item" href="#">Bombillas</a>
              <a className="dropdown-item" href="#">Termos</a>
              <a className="dropdown-item" href="#">Materas</a>
            </div>
        </li>
        
    );
}

export default Categorias;
