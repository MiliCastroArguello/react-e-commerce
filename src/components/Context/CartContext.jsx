import React, { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  clearCart: () => {},
  isInCart: () => {},
  addProduct: () => {},
  removeFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {}
});

const CartProvider = (props) => {

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  }

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    (getTotalQuantity()); 
  };
  
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart);
  };

  const getTotalQuantity = () => {
    let cant = 0
    cart.forEach((e) => cant += e.quantity)
    return cant
  };

  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity*e.price))
    return total        
  };

  return (
   
    <CartContext.Provider value={{ cart, clearCart, addProduct, removeFromCart, getTotalQuantity, getTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider }
export default CartContext;

