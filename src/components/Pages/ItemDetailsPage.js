import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ItemListContext} from "../Context/ItemListContext";

function ItemDetailsPage(props) {
    const {slug} = useParams()
    const {items} = useContext(ItemListContext)
    const {item_data, set_item_data} = useState(null)

    const get_item_data = () => {
        if(slug){

        }else{
            set_item_data(null)
        }
    }

    useEffect(() => {
        get_item_data()
    }, [])

    return (
        <div className="content-container">
            <div className="content-offset">
                {
                    item_data? <div>Van</div>: <div>Nincs</div>
                }
            </div>
        </div>
    );
}

export default ItemDetailsPage;