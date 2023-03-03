import React, { useState, useEffect } from 'react';
import {Item} from './Item';


const ItemListContainer = (props) => {

  const [productos, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filter = props.filter;

  useEffect(() => {
      setTimeout(() => {
        fetch('../data.json')
          .then(response => response.json())
          .then((jsonData) => {
            if(filter) {
              setData(jsonData.filter(producto => producto[filter] === true))
            } else {
              setData(jsonData)
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {setLoading(false)})
      }, 2000)
  }, [filter]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className="row">
        {productos.map(
          producto => (
            <Item key= {producto.id} id= {producto.id} nombre = {producto.nombre} precio = {producto.precio} img = {producto.img} oferta_tipo = {producto.oferta_tipo} oferta = {producto.oferta} />
          )
        )}
      </div>
    </div>
  );
}

export default ItemListContainer




