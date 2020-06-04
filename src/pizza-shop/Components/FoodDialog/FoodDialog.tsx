import React, { Fragment } from "react";
import {
    FoodDialogContainer,
    FoodDialogBanner,
    FoodDialogContainerShadow,
    FoodDialogBannerName,
    FoodDialogContent,
    FoodDialogFooter,
    FoodDialogConfirmButton,
} from "../../styles/styles";

interface Food {
    img: string;
    name: string;
}

interface FoodDialogProps {
    openFood: Food | undefined;
    setOpenFood: any;
    orders: Array<any>;
    setOrders: any
}

export const FoodDialog = ({ openFood, setOpenFood, orders, setOrders }: FoodDialogProps) => {
    const close = () => setOpenFood();
    
    if(!openFood) return null;

    const order = {
        name: openFood.name
    }
    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    }

    return (
        <Fragment>
            <FoodDialogContainerShadow onClick={close} />
            <FoodDialogContainer>
                <FoodDialogBanner img={openFood.img}>
                    <FoodDialogBannerName>{openFood.name}</FoodDialogBannerName>
                </FoodDialogBanner>
                <FoodDialogContent></FoodDialogContent>
                <FoodDialogFooter>
                    <FoodDialogConfirmButton onClick={addToOrder}>Add to order</FoodDialogConfirmButton>
                </FoodDialogFooter>
            </FoodDialogContainer>
        </Fragment>
    )
};
