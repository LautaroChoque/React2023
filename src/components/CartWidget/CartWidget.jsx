import React from 'react';
import { FaShoppingCart} from 'react-icons/fa'


const CartWidget = (cantCarrito) => {
    return (
        <>
            <button className='btn btn-dark'>Carrito</button>
            <p>{cantCarrito=5}</p>
            <FaShoppingCart/>
        </>
    );
}

export default CartWidget;
