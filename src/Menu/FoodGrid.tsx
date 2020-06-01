import React from "react";
import { FoodGridContainer, FoodContainer, FoodLabel } from "../styles/styles";
import { Food } from "./../data/food";

export const FoodGrid = ({ foods }: any) => {
    return (
        <FoodGridContainer>
            {foods.map(({ img, name }: Food, index: number) => (
                <FoodContainer img={img} key={index}>
                    <FoodLabel>{name}</FoodLabel>
                </FoodContainer>
            ))}
        </FoodGridContainer>
    );
};
