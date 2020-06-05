import { foodsItems } from "../data/food";

export interface FoodInterface {
    name: string;
    img: string;
    section: string;
    price: number;
}
export interface OrderInterface {
    name: string;
    price: number;
    quantity: number;
}

export interface QuantityObject {
    quantity: number;
    setQuantity: any;
    onChange: any;
}

export interface FoodSection {
    section: Array<FoodInterface>;
}

export const formatPrice = (price: number) =>
    price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

export const getPrice = ({ price, quantity }: any) => price * quantity;

export const menu: FoodSection = foodsItems.reduce((res: any, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
