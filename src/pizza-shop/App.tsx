import React from 'react';
import { GlobalStyle } from './styles/globalSyle';
import { NavBar } from "./NavBar/NavBar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";

function PizzaShop() {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Banner />
            <Menu />
        </>
    );
}

export default PizzaShop;
