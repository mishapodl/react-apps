import { useEffect } from "react";

export const useTitle = ({ openFood, orders }: any) => {
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
