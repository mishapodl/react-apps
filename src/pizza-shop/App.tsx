import React, { useState } from "react";
import { GlobalStyle } from "./styles/globalSyle";
import { NavBar } from "./NavBar/NavBar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";

function PizzaShop() {
    const [openFood, setOpenFood] = useState();

    return (
        <>
            <GlobalStyle />
            <FoodDialog food={openFood} setOpenFood={setOpenFood} />
            <NavBar />
            <Banner />
            <Menu setOpenFood={setOpenFood} />
        </>
    );
}

export default PizzaShop;
