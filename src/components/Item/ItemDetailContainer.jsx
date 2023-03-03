import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import SaleTag from "../SaleTag/SaleTag";

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [producto, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('../data.json')
        .then(response => response.json())
        .then((jsonData) => {
          setData(jsonData.find(producto => producto.id === parseInt(id)))
        })
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false)})
    }, 2000)
  }, [id]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }


  return (
    <div className="col-3">
      <div className="card">
        {producto.oferta ? <SaleTag oferta_tipo={producto.oferta_tipo} /> : ''}
        <img src= {`/imagenes/${producto.img}`} className="card-img-top mt-2" alt="foto de productos"/>
        <div className="card-body">
          <h5 className="card-title"> {producto.nombre}</h5>
          <p className="card-text">Precio: ${producto.precio}</p>
          <Link className="btn btn-primary agregar">
            Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  )
}