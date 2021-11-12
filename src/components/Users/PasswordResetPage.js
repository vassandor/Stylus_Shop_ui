import React from 'react';
import {Link} from "react-router-dom";

function PasswordResetPage(props) {
    return (
        <div className="content-container">
            <form>
                <h3>PASSWORD RESET</h3>
                <small>We will send you an email to reset your password.</small>
                <br/>
                <input type="email" placeholder="Email"/>
                <button className="inverted">SUBMIT</button>
                <small>or <Link to="/users/login">Cancel</Link></small>
            </form>
        </div>
    );
}

export default PasswordResetPage;