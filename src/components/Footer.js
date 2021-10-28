import React from 'react';

function Footer({title, address, phone, email}) {
    return (
        <div> 
            <hr/>
            <h3>{title}</h3>
            <p>{address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
       </div>
    );
}

export default Footer;