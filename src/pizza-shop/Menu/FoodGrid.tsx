import React from "react";
import { FoodGridContainer, FoodContainer, FoodLabel } from "../styles/styles";
import { Food } from "../data/food";

interface FoodGridProps {
    foods: Array<Food>;
    setOpenFood: any;
}

export const FoodGrid = ({ setOpenFood, foods }: FoodGridProps) => {
    return (
        <FoodGridContainer>
            {foods.map((food: Food, index: number) => (
                <FoodContainer
                    img={food.img}
                    key={index}
                    onClick={() => setOpenFood(food)}
                >
                    <FoodLabel>{food.name}</FoodLabel>
                </FoodContainer>
            ))}
        </FoodGridContainer>
    );
};
