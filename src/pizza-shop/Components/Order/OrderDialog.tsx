import React, { Fragment } from "react";
import {
    FoodDialogContainerStyle,
    FoodDialogContent,
    FoodDialogContainerShadow,
    FoodDialogFooter,
    FoodDialogConfirmButton,
} from "../../styles/styles";

interface OrderDialogProps {
    setOpenOrderDialog: any;
    openOrderDialog: any;
    setOrders: any;
}

export const OrderDialog = ({
    setOpenOrderDialog,
    openOrderDialog,
    setOrders,
}: OrderDialogProps) => {
    return openOrderDialog ? (
        <Fragment>
            <FoodDialogContainerShadow style={{ zIndex: 11 }} />
            <FoodDialogContainerStyle style={{ zIndex: 11 }}>
                <FoodDialogContent>
                    <h2>
                        <span role="img" aria-label="truck">
                            🚕
                        </span>{" "}
                        Your order:
                    </h2>
                    <p>Thanks for your order!</p>
                </FoodDialogContent>
                <FoodDialogFooter>
                    <FoodDialogConfirmButton
                        onClick={() => {
                            setOrders([]);
                            setOpenOrderDialog(false);
                        }}
                    >
                        I am still hungry!
                    </FoodDialogConfirmButton>
                </FoodDialogFooter>
            </FoodDialogContainerStyle>
        </Fragment>
    ) : (
        <div />
    );
};
