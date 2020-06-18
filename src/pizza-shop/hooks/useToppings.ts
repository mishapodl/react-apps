import { useState } from "react";
import { Topping } from "../utils";

export const useToppings = (defaultToppings: any) => {
    const [toppings, setToppings] = useState(
        defaultToppings || getDefaultToppings
    );

    const checkTopping = (index: number) => {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings);
    };

    return {
        toppings,
        checkTopping,
    };
};

const listToppings: Array<string> = [
    "Extra Chees",
    "Ham",
    "Onions",
    "Paperoni",
    "Tomato",
    "Papper",
];

function getDefaultToppings(): Array<Topping> {
    return listToppings.map((topping: string) => ({
        name: topping,
        checked: false,
    }));
}
