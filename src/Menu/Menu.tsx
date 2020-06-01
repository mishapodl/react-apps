import React, { Fragment } from "react";
import { MenuContainer } from "../styles/styles";
import { foods } from "./../data/food";
import { FoodGrid } from "./FoodGrid";

export const Menu = () => {
    return (
        <MenuContainer>
            {Object.entries(foods).map(([sectionName, foods], index) => (
                <Fragment key={index}>
                    <h1>{sectionName}</h1>
                    <FoodGrid foods={foods} />
                </Fragment>
            ))}
        </MenuContainer>
    );
};
