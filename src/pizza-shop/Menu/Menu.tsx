import React, { Fragment } from "react";
import { MenuContainer } from "../styles/styles";
import { foods } from "../data/food";
import { FoodGrid } from "./FoodGrid";

interface MenuProps {
    setOpenFood: any;
}

export const Menu = ({ setOpenFood }: MenuProps) => {
    return (
        <MenuContainer>
            {Object.entries(foods).map(([sectionName, foods], index) => (
                <Fragment key={index}>
                    <h1>{sectionName}</h1>
                    <FoodGrid foods={foods} setOpenFood={setOpenFood} />
                </Fragment>
            ))}
        </MenuContainer>
    );
};
