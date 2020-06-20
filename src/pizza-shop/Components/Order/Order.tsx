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
    setOrders: any;
    setOpenFood: any;
    login: any;
    loggedIn: any;
}

declare const window: any;
const database = window.firebase.database();

function sendOrder(orders: Array<OrderInterface>, { email, displayName }: any) {
    var newOrderRef = database.ref("orders").push();
    const newOrders = orders.map((order: any) => {
        return Object.keys(order).reduce((acc, orderKey) => {
            if (!order[orderKey]) {
                // undefined value
                return acc;
            }
            if (orderKey === "toppings") {
                return {
                    ...acc,
                    [orderKey]: order[orderKey]
                        .filter(({ checked }: any) => checked)
                        .map(({ name }: OrderInterface) => name),
                };
            }
            return {
                ...acc,
                [orderKey]: order[orderKey],
            };
        }, {});
    });
    newOrderRef.set({
        order: newOrders,
        email,
        displayName,
    });
}

export const Order = ({
    orders,
    setOrders,
    setOpenFood,
    login,
    loggedIn,
}: OrderProps) => {
    const subtotal: number = orders.reduce((total, order) => {
        return total + getPrice(order, true);
    }, 0);
    const tax: number = subtotal * 0.07;
    const total: number = subtotal + tax;

    const deletItem = (index: number) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    return (
        <OrderContainer>
            {orders.length === 0 ? (
                <OrderContent>Your order empty.</OrderContent>
            ) : (
                <OrderContent>
                    {" "}
                    <OrderConainerItem> Your order:</OrderConainerItem>{" "}
                    {orders.map((order: OrderInterface, index: number) => (
                        <OrderConainerItem key={index} editable={true}>
                            <OrderItem
                                onClick={() => setOpenFood({ ...order, index })}
                            >
                                <div>{order.quantity}</div>
                                <div>{order.name}</div>
                                <div
                                    style={{ cursor: "pointer", zIndex: 1 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deletItem(index);
                                    }}
                                >
                                    <span role="img" aria-label="remove">
                                        ❌
                                    </span>
                                </div>
                                <div>{formatPrice(getPrice(order, true))}</div>
                            </OrderItem>
                            <DetailItem>
                                {order.choice
                                    ? order.choice
                                    : order.toppings
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
                <FoodDialogConfirmButton
                    onClick={() => {
                        if (loggedIn) {
                            sendOrder(orders, loggedIn);
                        } else {
                            login();
                        }
                    }}
                >
                    Checkout
                </FoodDialogConfirmButton>
            </FoodDialogFooter>
        </OrderContainer>
    );
};
