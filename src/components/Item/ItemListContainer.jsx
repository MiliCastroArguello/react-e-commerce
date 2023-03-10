import React, { useState, useEffect } from 'react';
import {Item} from './Item';
import {useParams} from "react-router-dom";
import Loading from "../Loading";
const ItemListContainer = (props) => {

  const { marca } = useParams();
  const [prendas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filter = props.filter;

  useEffect(() => {
      setTimeout(() => {
        fetch('../data/data.json')
          .then(response => response.json())
          .then((jsonData) => {
            switch (filter) {
              case 'oferta':
                setData(jsonData.filter(prenda => prenda[filter] === true))
                break;
              case 'marca': {
                setData(jsonData.filter(prenda => prenda[filter] === marca))
                break;
              }
              default: {
                setData(jsonData)
              }
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {setLoading(false)})
      }, 2000)
  }, [filter, marca]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>
      <div className="row">
        {prendas.map(
          prenda => (
            <Item key= {prenda.id} id= {prenda.id} nombre = {prenda.nombre} precio = {prenda.precio} img = {prenda.img} marca = {prenda.marca} oferta_tipo = {prenda.oferta_tipo} oferta = {prenda.oferta} />
          )
        )}
      </div>
    </div>
  );
}

export default ItemListContainer



