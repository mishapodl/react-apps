import React from "react";
import { GlobalStyle } from "./styles/globalSyle";
import { NavBar, Banner, Menu, FoodDialog, Order } from "./Components/index";
import { useOpenFood, useOrders, useTitle } from "./hooks/index";

function PizzaShop() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({ ...openFood, ...orders });
    return (
        <>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <NavBar />
            <Banner />
            <Menu {...openFood} />
            <Order {...orders} {...openFood} />
        </>
    );
}

export default PizzaShop;
