import React from "react";
import { GlobalStyle } from "./styles/globalSyle";
import { NavBar, Banner, Menu, FoodDialog, Order } from "./Components/index";
import { useOpenFood } from "./hooks/useOpenFood";
import { useOrders } from "./hooks/useOrders";

function PizzaShop() {
    const openFood = useOpenFood();
    const orders = useOrders();

    return (
        <>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <NavBar />
            <Banner />
            <Menu {...openFood} />
            <Order {...orders} />
        </>
    );
}

export default PizzaShop;
