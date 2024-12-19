import React from 'react';
import {useSelector} from "react-redux";
import {EmptyCart, FillCart} from "../../components/index.jsx";

function Cart() {
    //const {items} = useSelector(state => state.cart.items)
    return (
        <>
            {/*<EmptyCart/>*/}
            <FillCart/>
        </>

    );
}

export default Cart;