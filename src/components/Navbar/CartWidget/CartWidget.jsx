import React from 'react';
import { FaShoppingCart} from 'react-icons/fa'


const CartWidget = (cantCarrito) => {
    return (
        <>
            <p>{cantCarrito=5}</p>
            <FaShoppingCart size={'50px'} color={'white'}/>
        </>
    );
}

export default CartWidget;
