import React from 'react';
import Slider from "./Slider";
import ShopFor from "./ShopFor";
import Home_ItemList from "./Home_ItemList";

function HomePage(props) {
    return (
        <div className="content-container">
            <Slider/>

            <ShopFor/>

            <Home_ItemList title="FEATURED COLLECTION" items={[1, 2, 3, 4, 5]}/>

            <Home_ItemList title="ANALOG CAMERAS" items={[1, 2, 3, 4]}/>

            <Home_ItemList title="LEICA M" items={[1, 2, 3]}/>
        </div>
    );
}

export default HomePage;