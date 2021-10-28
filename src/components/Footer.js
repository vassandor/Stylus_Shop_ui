import React from 'react';
import "./Footer.css"

function Footer({title, address, phone, email}) {
    return (
        <div className="footer-container">
            <h3>{title}</h3>
            <p>{address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
       </div>
    );
}

export default Footer;