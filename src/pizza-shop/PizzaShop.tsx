import React from "react";
import { GlobalStyle } from "./styles/globalSyle";
import {
    NavBar,
    Banner,
    Menu,
    FoodDialog,
    Order,
    OrderDialog,
} from "./Components/index";
import {
    useOpenFood,
    useOrders,
    useTitle,
    useAuthentification,
    useOrderDialog,
} from "./hooks/index";

function PizzaShop() {
    const openFood = useOpenFood();
    const orders = useOrders();
    const auth = useAuthentification();
    const openDialog = useOrderDialog();

    useTitle({ ...openFood, ...orders });
    return (
        <>
            <GlobalStyle />
            <OrderDialog {...openDialog} {...orders} />
            <FoodDialog {...openFood} {...orders} />
            <NavBar {...auth} />
            <Banner />
            <Menu {...openFood} />
            <Order {...orders} {...openFood} {...auth} {...openDialog} />
        </>
    );
}

export default PizzaShop;
