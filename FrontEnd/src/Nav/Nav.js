import React from 'react';

import {
    Link
} from "react-router-dom";

function Nav() {
    return (
        <header>
            <div 
            className="inside"
            role="navigation"
            aria-label="Main menu"
            itemScope
            itemType="https://schema.org/SiteNaviagationElement"
            >
                <ul className="usernav">
                    <li><Link itemProp="url" to="/">Home</Link></li>
                    <li><Link itemProp="url" to="/signup">Signup</Link></li>
                    <li><Link itemProp="url" to="/login">Login</Link></li>
                </ul>
            </div>
        </header>
  );
}

export default Nav;