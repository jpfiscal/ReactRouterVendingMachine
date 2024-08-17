import React from "react"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>You thirst? Pick a Drink</h1>
            <Link to="/cokeZero">Coke Zero</Link>
            <Link to="/bossCoffee">Boss Coffee</Link>
            <Link to="/prime">Prime</Link>
        </>
    )
}

export default Home;