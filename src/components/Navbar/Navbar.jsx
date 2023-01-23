import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Categorias from './Categorias/Categorias'
import Secciones from './Secciones/Secciones'


export default function () {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Incio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                <Categorias/>
                <Secciones/>
                </ul>
        
            </div>
            </div>
    <CartWidget cantCarrito={10}/>
    
        </nav>
    </>
  )
}
