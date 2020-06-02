import React from "react";
import {
    OrderContainer,
    OrderContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
} from "../styles/styles";

export const Order = () => {
    return (
        <OrderContainer>
            <OrderContent>Your order empty.</OrderContent>
            <FoodDialogFooter>
                <FoodDialogConfirmButton>Checkout</FoodDialogConfirmButton>
            </FoodDialogFooter>
        </OrderContainer>
    );
};
