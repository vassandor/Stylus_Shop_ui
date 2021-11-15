import React, {useContext} from 'react';
import {ShoppingCartContext} from "../Context/ShoppingCartContext";
import CartItem from "./CartItem";
import {numberWithCommas} from "../../utilities";

function ShoppingCartPopup(props) {
    const {shopping_list, total, visible, set_visible} = useContext(ShoppingCartContext)

    if(!visible) return null

    return (
        <div className="cart-container" onClick={e => set_visible(false)}>
            <div className="cart-details" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h3>SHOPPING CART</h3>
                    <i className="far fa-times-circle" onClick={e => set_visible(false)}/>
                </div>
                <hr/>
                {
                    shopping_list.map(data => <CartItem key={data.id} data={data}/>)
                }
                <hr/>
                <h2 className="price">${numberWithCommas(total)}</h2>
                <small>Shipping, taxes and discounts will be calculated at checkout.</small>
                <button className="inverted">CHECK OUT</button>
            </div>
        </div>
    );
}

export default ShoppingCartPopup;