import React from "react";
import { FoodGridContainer, FoodContainer, FoodLabel } from "../styles/styles";
import { Food } from "./../data/food";

interface FoodProps {
    foods: Array<Food>
}

export const FoodGrid = ({ foods }: FoodProps) => {
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
