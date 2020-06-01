import React, { Fragment } from "react";
import {
    MenuContainer,
    FoodGrid,
    FoodContainer,
    FoodLabel,
} from "../styles/styles";
import { foods, Food } from "./../data/food";

export const Menu = () => {
    return (
        <MenuContainer>
            {Object.entries(foods).map(([sectionName, foods], index) => (
                <Fragment key={index}>
                    <h1>{sectionName}</h1>
                    <FoodGrid>
                        {foods.map(({ img, name }: Food, index: number) => (
                            <FoodContainer img={img} key={index}>
                                <FoodLabel>{name}</FoodLabel>
                            </FoodContainer>
                        ))}
                    </FoodGrid>
                </Fragment>
            ))}
        </MenuContainer>
    );
};
