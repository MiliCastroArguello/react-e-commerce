import React from 'react' 
import { Link } from 'react-router-dom'
import SaleTag from "../SaleTag/SaleTag";



export const Item = ({id, img, nombre, precio, oferta, oferta_tipo}) => {
  return (
    <div className="col-3">
      <div className="card">
        {oferta ? <SaleTag oferta_tipo={oferta_tipo} /> : ''}
        <img src= {`/imagenes/${img}`} className="card-img-top mt-2" alt="productos"/>
        <div className="card-body">
          <h5 className="card-title"> {nombre}</h5>
          <p className="card-text">Precio: ${precio}</p>
          <Link className="btn btn-primary agregar" to={`/productos/${id}`}>
            Detalle
          </Link>
        </div>
      </div>
    </div>
    )
}