import React, { useState } from "react";
import { GlobalStyle } from "./styles/globalSyle";
import { NavBar, Banner, Menu, FoodDialog, Order } from "./Components/index";

function PizzaShop() {
    const [openFood, setOpenFood] = useState();

    return (
        <>
            <GlobalStyle />
            <FoodDialog food={openFood} setOpenFood={setOpenFood} />
            <NavBar />
            <Banner />
            <Menu setOpenFood={setOpenFood} />
            <Order />
        </>
    );
}

export default PizzaShop;
