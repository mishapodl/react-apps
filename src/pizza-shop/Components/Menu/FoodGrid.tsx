import React from "react";
import {
    FoodGridContainer,
    FoodContainer,
    FoodLabel,
} from "../../styles/styles";
import { FoodInterface, formatPrice } from "../../utils";

interface FoodGridProps {
    menu: Array<FoodInterface>;
    setOpenFood: any;
}

export const FoodGrid = ({ setOpenFood, menu }: FoodGridProps) => {
    return (
        <FoodGridContainer>
            {menu.map((food: FoodInterface, index: number) => (
                <FoodContainer
                    img={food.img}
                    key={index}
                    onClick={() => setOpenFood(food)}
                >
                    <FoodLabel>
                        <div>{food.name}</div>
                        <div>{formatPrice(food.price)}</div>
                    </FoodLabel>
                </FoodContainer>
            ))}
        </FoodGridContainer>
    );
};
