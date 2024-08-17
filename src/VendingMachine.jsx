import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import CokeZero from "./CokeZero";
import BossCoffee from "./BossCoffee";
import Prime from "./Prime";

const VendingMachine = () => {

    return(
        <div className="VendingMachine">
            <BrowserRouter>
                <Routes>
                    <Route path="/cokeZero" element={<CokeZero/>} />
                    <Route path="/bossCoffee" element={<BossCoffee/>} />
                    <Route path="/prime" element={<Prime/>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;