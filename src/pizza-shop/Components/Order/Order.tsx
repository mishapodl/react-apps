import React from "react";
import {
    OrderContainer,
    OrderContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
    OrderConainerItem,
    OrderItem,
} from "../../styles/styles";
import { formatPrice, OrderInterface, getPrice } from "./../../utils";

interface OrderProps {
    orders: Array<OrderInterface>;
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
                    {orders.map((order, index) => (
                        <OrderConainerItem key={index}>
                            <OrderItem>
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div>{formatPrice(getPrice(order))}</div>
                            </OrderItem>
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
