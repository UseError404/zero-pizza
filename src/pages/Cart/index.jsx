import React from 'react';
import {useSelector} from "react-redux";
import {EmptyCart, FillCart} from "../../components/index.jsx";

function Cart() {
    const items = useSelector(state => state.cart.items)
    return (
        <>
            {
                items.length > 0 ? <FillCart/> : <EmptyCart/>
            }


        </>

    );
}

export default Cart;