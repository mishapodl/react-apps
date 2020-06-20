import React from "react";
import { GlobalStyle } from "./styles/globalSyle";
import { NavBar, Banner, Menu, FoodDialog, Order } from "./Components/index";
import {
    useOpenFood,
    useOrders,
    useTitle,
    useAuthentification,
} from "./hooks/index";

function PizzaShop() {
    const openFood = useOpenFood();
    const orders = useOrders();
    const auth = useAuthentification();

    useTitle({ ...openFood, ...orders });
    return (
        <>
            <GlobalStyle />
            <FoodDialog {...openFood} {...orders} />
            <NavBar {...auth} />
            <Banner />
            <Menu {...openFood} />
            <Order {...orders} {...openFood} {...auth} />
        </>
    );
}

export default PizzaShop;
