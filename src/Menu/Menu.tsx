import React from "react";
import {
    MenuContainer,
    FoodGrid,
    FoodContainer,
    FoodLabel,
} from "../styles/styles";
import { foods } from "./../data/food";

export const Menu = () => {
    return (
        <MenuContainer>
            <h1>Menu</h1>
            <FoodGrid>
                {foods.map(({ name, img }, index) => (
                    <FoodContainer img={img} key={index}>
                        <FoodLabel>{name}</FoodLabel>
                    </FoodContainer>
                ))}
            </FoodGrid>
        </MenuContainer>
    );
};
