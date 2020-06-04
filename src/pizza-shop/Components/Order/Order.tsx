import React from "react";
import {
    OrderContainer,
    OrderContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
    OrderConainerItem,
    OrderItem,
} from "../../styles/styles";

interface OrderProps {
    orders: Array<any>;
}

export const Order = ({ orders }: OrderProps) => {
    return (
        <OrderContainer>
            {orders.length === 0 ? (
                <OrderContent>Your order empty.</OrderContent>
            ) : (
                <OrderContent>
                    {" "}
                    <OrderConainerItem> Your order:</OrderConainerItem>{" "}
                    {orders.map((order) => (
                        <OrderConainerItem>
                            <OrderItem>{order.name}</OrderItem>
                        </OrderConainerItem>
                    ))}
                </OrderContent>
            )}
            <FoodDialogFooter>
                <FoodDialogConfirmButton>Checkout</FoodDialogConfirmButton>
            </FoodDialogFooter>
        </OrderContainer>
    );
};
