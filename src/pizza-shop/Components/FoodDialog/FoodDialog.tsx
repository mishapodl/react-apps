import React, { Fragment } from "react";
import {
    FoodDialogContainerStyle,
    FoodDialogBanner,
    FoodDialogContainerShadow,
    FoodDialogBannerName,
    FoodDialogContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
} from "../../styles/styles";
import { formatPrice, FoodInterface, getPrice } from "./../../utils";
import { Toppings } from "./Toppings";
import { Quantity } from "./Quantity";
import { useQuantity, useToppings } from "./../../hooks/index";

interface FoodDialogProps {
    openFood: FoodInterface;
    setOpenFood: any;
    orders: Array<any>;
    setOrders: any;
}

const FoodDialogContainer = ({
    openFood,
    setOpenFood,
    orders,
    setOrders,
}: FoodDialogProps) => {
    const close = () => setOpenFood();
    const quantity = useQuantity(openFood && 1);
    const toppings = useToppings(openFood.toppings);

    const order = {
        ...openFood,
        quantity: quantity.quantity,
        toppings: toppings.toppings
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    };
    const hasToppings = ( food: FoodInterface ) => food.section === 'Pizza';
    return (
        <Fragment>
            <FoodDialogContainerShadow onClick={close} />
            <FoodDialogContainerStyle>
                <FoodDialogBanner img={openFood.img}>
                    <FoodDialogBannerName>{openFood.name}</FoodDialogBannerName>
                </FoodDialogBanner>
                <FoodDialogContent>
                    <Quantity quantitys={quantity} />
                    {hasToppings(openFood) && (
                        <Fragment>
                            <h3>Toppings</h3>
                            <Toppings {...toppings}/>
                        </Fragment>
                    )}
                </FoodDialogContent>
                <FoodDialogFooter>
                    <FoodDialogConfirmButton onClick={addToOrder}>
                        Add to order: {formatPrice(getPrice(order, true))}{" "}
                    </FoodDialogConfirmButton>
                </FoodDialogFooter>
            </FoodDialogContainerStyle>
        </Fragment>
    );
};

export const FoodDialog = (props: any) => {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />;
};
