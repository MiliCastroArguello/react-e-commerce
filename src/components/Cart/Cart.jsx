import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {

  const { cart, addProduct, isInCart, clearCart, removeFromCart, getTotalQuantity, getTotal } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClear = () => {
    clearCart();
  };

  return (
    <div>
      <h3>Carrito de Compras</h3>
      <ul>
        {cart.map((prenda) => (
            <li key={prenda.id}>
            <span>{prenda.nombre} = ${prenda.precio}</span>
            <button onClick={() => handleRemove(prenda.id)}>X</button>
          </li>
        ))}
      </ul>
      <h5>Total Items: {getTotalQuantity()}</h5>
      <h5>Total Precio: {getTotal()}</h5>
      
      <button onClick={handleClear}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;