import React from "react";
import { MenuContainer, FoodGrid, Food } from "../styles/styles";
import { foods } from "./../data/food";

export const Menu = () => {
    return (
        <MenuContainer>
            <FoodGrid>
                {foods.map(({ name, img }) => (
                    <Food>{name}</Food>
                ))}
            </FoodGrid>
        </MenuContainer>
    );
};
