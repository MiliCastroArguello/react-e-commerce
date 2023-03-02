import React, { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=shoes');
      const json = await response.json();
      setData(json.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetailContainer;