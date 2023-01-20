import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>CARRITO</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
