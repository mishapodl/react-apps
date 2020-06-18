import React, { Fragment } from "react";
import { MenuContainer, Head } from "../../styles/styles";
import { menu } from "../../utils";
import { FoodGrid } from "./FoodGrid";

interface MenuProps {
    setOpenFood: any;
}

export const Menu = ({ setOpenFood }: MenuProps) => {
    return (
        <MenuContainer>
            {Object.entries(menu).map(([sectionName, menu], index) => (
                <Fragment key={index}>
                    <Head>{sectionName}</Head>
                    <FoodGrid menu={menu} setOpenFood={setOpenFood} />
                </Fragment>
            ))}
        </MenuContainer>
    );
};
