import React from "react";
import { Link } from "react-router-dom";

const BossCoffee = () => {
    return (
        <div className="BossCoffee">
            <img src="https://hungry-ninja.ca/cdn/shop/products/SuntoryBossCoffeeRainbowEspresso.jpg?v=1676584932&width=990" />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default BossCoffee;