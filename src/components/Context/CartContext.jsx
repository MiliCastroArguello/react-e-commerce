import React, {useContext, useState} from "react";

const CartContext = React.createContext()

export function useCartContext() {
  return useContext(CartContext)
}
export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((total, item) => total + item, 0)
  );

  const updateCart = (cart) => {
    setCartItems(cart)
  }

  const handleAdd = (item) => {
    updateCart([...cartItems, item])
    setTotalPrice(totalPrice + item.precio)
  }

  const handleRemove = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      updateCart(newCartItems);
      setTotalPrice(totalPrice - item.precio)
    }
  }
  const resetCart = () => {
    setCartItems([])
    setTotalPrice(0)
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CartContext.Provider value={{cartItems, totalPrice, handleAdd, handleRemove, resetCart, show, handleClose, handleShow}}>
        {children}
    </CartContext.Provider>
  )
}