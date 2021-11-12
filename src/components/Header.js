import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function Menu(){
    const [menu_list, set_menu_list] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/categories"
        }).then(res => set_menu_list(res.data))
    },[])

    return (
        <div className="menu">
            {
                menu_list.map(item_data => <div className="menu-item">{item_data.title}</div>)
            }
        </div>
    )
}

function Header(props) {
    return (
        <div className="header-container">

            <div className="content-container">
                <div className="title-container">
                    <h1><Link to="/">DIGITAL SHOP</Link></h1>

                    <div>
                        <small className="sign-in-container"><Link to="/users/login">Sign in</Link> or <Link to="/users/registration">Create an Account</Link></small>
                        <br/>
                        <div className="search-box">
                            <input type="search" placeholder="Search all products..."/>
                            <i className="fas fa-search"/>
                        </div>
                        <button><i className="fas fa-shopping-cart"/>CART</button>
                    </div>
                </div>

                <Menu/>

            </div>

        </div>
    );
}

export default Header;