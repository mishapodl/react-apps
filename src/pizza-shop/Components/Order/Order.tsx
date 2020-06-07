import React from "react";
import {
    OrderContainer,
    OrderContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
    OrderConainerItem,
    OrderItem,
    DetailItem,
} from "../../styles/styles";
import { formatPrice, OrderInterface, getPrice } from "./../../utils";

interface OrderProps {
    orders: Array<OrderInterface>;
}

export const Order = ({ orders }: OrderProps) => {
    const subtotal: number = orders.reduce((total, order) => {
        return total + getPrice(order, true);
    }, 0);
    const tax: number = subtotal * 0.07;
    const total: number = subtotal + tax;
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
                                <div>{formatPrice(getPrice(order, true))}</div>
                            </OrderItem>
                            <DetailItem>
                                {order.toppings
                                    .filter((t) => t.checked)
                                    .map((topping) => topping.name)
                                    .join(", ")}
                            </DetailItem>
                        </OrderConainerItem>
                    ))}
                    <OrderConainerItem>
                        <OrderItem>
                            <div />
                            <div>Subtotal: </div>
                            <div>{formatPrice(subtotal)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div />
                            <div>Tax: </div>
                            <div>{formatPrice(tax)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div />
                            <div>Total: </div>
                            <div>{formatPrice(total)}</div>
                        </OrderItem>
                    </OrderConainerItem>
                </OrderContent>
            )}
            <FoodDialogFooter>
                <FoodDialogConfirmButton>Checkout</FoodDialogConfirmButton>
            </FoodDialogFooter>
        </OrderContainer>
    );
};
