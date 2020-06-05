import { useEffect } from "react";

interface TitleProps {
    openFood: any;
    orders: any;
}

export const useTitle = ({ openFood, orders }: TitleProps) => {
    useEffect(() => {
        if (openFood) {
            document.title = openFood.name;
        } else {
            document.title =
                orders.length === 0
                    ? `What's for dinner?`
                    : `[${orders.length}] items in your order!`;
        }
    });
};
