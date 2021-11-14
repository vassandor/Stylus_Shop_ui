import React, {useContext} from 'react';
import {ShoppingCartContext} from "../Context/ShoppingCartContext";

function CartItem({data}) {
    const {remove_from_cart} = useContext(ShoppingCartContext)

    return (
        <div className="cart-item-container">
            <img src={data.image} alt=""/>
            <div>{data.title}</div>
            <div>quantity</div>
            <h4>${data.price}</h4>
            <i onClick={e => remove_from_cart(data.id)} onclassName="fas fa-trash-alt"/>
        </div>
    );
}

export default CartItem;