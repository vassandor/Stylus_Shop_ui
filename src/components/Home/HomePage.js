import React, {useContext, useEffect, useState} from 'react';
import Slider from "./Slider";
import ShopFor from "./ShopFor";
import Home_ItemList from "./Home_ItemList";
import axios from "axios";
import {ItemListContext} from "../Context/ItemListContext";

function HomePage(props) {
    const {items} = useContext(ItemListContext)
    const [featured_list, set_featured_list] = useState([])
    const [analog_cameras, set_analog_cameras] = useState([])
    const [leica_m, set_leica_m] = useState([])

    const fetch_featured_list = () => {
       set_featured_list(items.filter(item => item.featured))
    }

    const fetch_analog_cameras = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/analog`
       }).then(res => set_analog_cameras(res.data))
    }

    const fetch_leica_m = () => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/leica_m`
       }).then(res => set_leica_m(res.data))
    }

    useEffect(() => {
        fetch_analog_cameras()
        fetch_leica_m()
    }, [])

    useEffect(() => {
        fetch_featured_list()
    }, [items])

    return (
        <div className="content-container">
            <div className="content-offset">
                <Slider/>

                <hr/>

                <ShopFor/>

                <hr/>

                <Home_ItemList title="FEATURED COLLECTION" items={featured_list}/>

                <hr/>

                <Home_ItemList title="ANALOG CAMERAS" items={analog_cameras}/>

                <hr/>

                <Home_ItemList title="LEICA M" items={leica_m}/>
            </div>
        </div>
    );
}

export default HomePage;