import React, {useState} from "react";
import {useCartContext} from "../Context/CartContext";
import {Button, CloseButton, Modal, Offcanvas} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Cart = () => {
  const cart = useCartContext()

  const [modalShow, setShow] = useState(false);

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  return (
    <>
      <Offcanvas show={cart.show} onHide={cart.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.cartItems.length > 0 ? (
            <>
              <ul>
                {cart.cartItems.map((prenda, index) => (

                  <li key={index}>
                    <img src= {`/imagenes/${prenda.img}`} className="imagenCarrito" alt="imagen de prendas"/>

                    <span>{prenda.nombre} = ${prenda.precio} </span><CloseButton onClick={()=>cart.handleRemove(prenda)} />
                  </li>
                ))}
              </ul>
              <h5>Total Items: {cart.cartItems.length}</h5>
              <h5>Total Precio: $ {cart.totalPrice}</h5>

              <Button onClick={()=>cart.resetCart()} variant="secondary">Vaciar Carrito</Button>{' '}
              <Button onClick={handleShowModal} variant="primary">Confirmar y comprar</Button>{' '}
            </>
          ) : (
            <div> Tu carrito está vacío </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={modalShow} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Compra realizada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Gracias por comprar con nosotros! Te enviaremos un mail con los detalles de tu compra y la factura.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <LinkContainer to={'/'}>
            <Button variant="primary"  onClick={()=>{cart.resetCart(); handleCloseModal(); cart.handleClose()}}>
              Confirmar
            </Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;