import React, { FC } from "react";
import { NavBarContainer, LogoContainer } from "../../styles/styles";

interface NavBarProps {}

export const NavBar: FC = () => {
    return (
        <NavBarContainer>
            <LogoContainer>
                Sliceline{" "}
                <span role='img' aria-label='pizza slice'>
                    🍕
                </span>
            </LogoContainer>
        </NavBarContainer>
    );
};
