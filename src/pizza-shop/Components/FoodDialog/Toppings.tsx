import React from "react";
import {
    ToppingsCheckBox,
    ToppingsGrid,
    ToppingsLabel,
} from "../../styles/styles";
import { Topping } from "./../../utils/index";

interface ToppingsProps {
    toppings: Array<Topping>;
    checkTopping: any;
}

export const Toppings = ({ toppings, checkTopping }: ToppingsProps) => {
    return (
        <ToppingsGrid>
            {toppings.map((topping: Topping, index: number) => (
                <ToppingsLabel key={index}>
                    <ToppingsCheckBox
                        type='checkbox'
                        checked={topping.checked}
                        onChange={() => checkTopping(index)}
                    />
                    {topping.name}
                </ToppingsLabel>
            ))}
        </ToppingsGrid>
    );
};
