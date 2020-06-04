import React from "react";
import {
    OrderContainer,
    OrderContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
    OrderConainerItem,
    OrderItem,
} from "../../styles/styles";
import { formatPrice } from "./../../data/food";

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
                    {orders.map((order, index) => (
                        <OrderConainerItem key={index}>
                            <OrderItem>
                                <div>1</div>
                                <div>{order.name}</div>
                                <div>{formatPrice(order.price)}</div>
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
