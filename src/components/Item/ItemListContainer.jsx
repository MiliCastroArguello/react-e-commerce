import React, { useState, useEffect } from 'react';
import {Item} from './Item';
import {useParams} from "react-router-dom";
import Loading from "../Loading";
import { getPrendas } from '../../Database/dataBase';
const ItemListContainer = (propsUni) => {

  const { marca } = useParams();
  const [prendas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filter = propsUni.filter;

  useEffect(() => {
     getPrendas()
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
  
  }, [filter, marca]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>
      <div className="row">
        {prendas.map(
          prenda => (
            <Item key={prenda.id + Math.random(0,100)} id={prenda.id} nombre={prenda.nombre} precio={prenda.precio} img={prenda.img} marca={prenda.marca} oferta_tipo={prenda.oferta_tipo} oferta={prenda.oferta} />
          )
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;



