import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="NavBar">
            <Link to="/cokeZero">Coke Zero</Link>
            <Link to="/bossCoffee">Boss Coffee</Link>
            <Link to="/prime">PRIME</Link>
        </nav>
    );
}

export default NavBar;