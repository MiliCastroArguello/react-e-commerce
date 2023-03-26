import React, {useContext} from 'react'
import CartContext from './Context/CartContex'


const Cart = () => {

    const cartItems = useContext ( CartContext ).cartItems
    console.log (cartItems)



    return (
        <div>Cart</div>
    )
}

export default Cart