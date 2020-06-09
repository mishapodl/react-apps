import { foodsItems } from "../data/food";

export interface FoodInterface {
    name: string;
    img: string;
    section: string;
    price: number;
    toppings?: Array<Topping>;
    choices?: any;
}
export interface OrderInterface {
    name: string;
    price: number;
    quantity: number;
    toppings: Array<Topping>;
    choice: Array<Topping>;
}

export interface QuantityObject {
    quantity: number;
    setQuantity: any;
    onChange: any;
}

export interface FoodSection {
    section: Array<FoodInterface>;
}

export interface Topping {
    name: string;
    checked: boolean;
}
export interface ChicesInterface {
    value: any;
    onChange: any;
}
export const formatPrice = (price: number) =>
    price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

export const getPrice = (
    { price, quantity, toppings }: OrderInterface,
    topping?: boolean
) => {
    let toppingsPrice = 0;
    if (topping) {
        toppingsPrice =
            toppings.filter((t: Topping) => t.checked).length * 0.25;
    }

    return price * quantity + toppingsPrice;
};

export const menu: FoodSection = foodsItems.reduce((res: any, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
