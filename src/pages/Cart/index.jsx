import React from 'react';
import {useSelector} from "react-redux";
import {EmptyCart, FillCart} from "../../components/index.jsx";
import {selectCartItems} from "../../redux/slices/cartSlice.js";

function Cart() {
    const items = useSelector(selectCartItems)
    return (
        <>
            {
                items.length > 0 ? <FillCart/> : <EmptyCart/>
            }
        </>

    );
}

export default Cart;