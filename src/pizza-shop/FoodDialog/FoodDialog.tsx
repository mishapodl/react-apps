import React, { Fragment } from "react";
import {
    FoodDialogContainer,
    FoodDialogBanner,
    FoodDialogContainerShadow,
    FoodDialogBannerName,
} from "../styles/styles";

interface Food {
    img: string;
    name: string;
}

interface FoodDialogProps {
    food: Food | undefined;
    setOpenFood: any;
}

export const FoodDialog = ({ food, setOpenFood }: FoodDialogProps) => {
    const close = () => setOpenFood();

    return food ? (
        <Fragment>
            <FoodDialogContainerShadow onClick={close} />
            <FoodDialogContainer>
                <FoodDialogBanner img={food.img}>
                    <FoodDialogBannerName>{food.name}</FoodDialogBannerName>
                </FoodDialogBanner>
            </FoodDialogContainer>
        </Fragment>
    ) : null;
};
