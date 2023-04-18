import React, {useContext, useEffect, useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import SaleTag from "../SaleTag/SaleTag";
import Loading from "../Loading";
import CartContext from '../Context/CartContext';
import { getPrendas } from '../../Database/dataBase';

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [prenda, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const addProduct = useContext (CartContext).addProduct

  useEffect(() => {
    getPrendas ()
        .then((jsonData) => {
          setData(jsonData.find(prenda => prenda.id === parseInt(id)))
        })
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false)})
  }, [id]);

  if (loading) {
    return <Loading />
  }


  return (
    <div className="col-3">
      <div className="card">
        {prenda.oferta ? <SaleTag oferta_tipo={prenda.oferta_tipo} /> : ''}
        <img src= {`/imagenes/${prenda.img}`} className="card-img-top mt-2" alt="imagen de prendas"/>
        <div className="card-body">
          <h5 className="card-title"> {prenda.nombre}</h5>
          <p className="card-text">Precio: ${prenda.precio}</p>
          <p className="card-text">Marca: {prenda.marca}</p>
          
          <Link onClick={() => addProduct(prenda)} className="btn btn-primary agregar" to={`/carrito/`}>
            Agregar al carrito
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer;