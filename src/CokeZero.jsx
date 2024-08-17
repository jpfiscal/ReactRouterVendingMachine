import React from "react";
import { Link } from "react-router-dom";

const CokeZero = () => {
    return (
        <div className="CokeZero">
            <img src="https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-zero/en_coca-cola_prod_zero%20sugar%20_750x750_v1.jpg" alt="Coke Zero"/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default CokeZero;