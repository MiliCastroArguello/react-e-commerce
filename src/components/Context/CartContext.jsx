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

  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false; 
  };

  const clearCart = () => {
    setCart([]);
  };

  const addProduct = (item, quantity = 1) => {
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
    (getTotalQuantity(item.quantity)); 
  };
  
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart);
  };

  const getTotalQuantity = () => {
    let cant = 
    cart.forEach((item) => cant += item.quantity)
    return cant
  };

  const getTotal = () => {
    let total = 
    cart.forEach((item) => total += (item.quantity*item.price))
    return total        
  };

  return (
   
    <CartContext.Provider value={{ cart, clearCart, addProduct,isInCart, removeFromCart, getTotalQuantity, getTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider }
export default CartContext;

