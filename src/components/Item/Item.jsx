import { Link } from "react-router-dom"

export const Item = ({item}) => {
    return (
      <div className="card mb-3 cardProducto border-light" style={{width: '19rem'}}>
              <img src={`../img/${item.img}`} className="card-img-top" alt="..." />
                  <div className="card-body cardBody">
      <h5 className="card-title">{item.nombre}</h5>
      <p className="card-text">{new Intl.NumberFormat('de-DE').format(item.precio)}</p>
      <Link className="btn btn-primary" to={`/item/${item.id}`}>Ver Producto</Link>
      
    </div>
  </div>
  
    )
  }