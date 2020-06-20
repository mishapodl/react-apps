import React, { Fragment } from "react";
import {
    NavBarContainer,
    LogoContainer,
    UserStatus,
    LoginButton,
} from "../../styles/styles";

interface NavBarProps {
    login: any;
    logout: any;
    loggedIn: any;
}

export const NavBar = ({ login, loggedIn, logout }: NavBarProps) => {
    return (
        <NavBarContainer>
            <LogoContainer>
                Sliceline{" "}
                <span role="img" aria-label="pizza slice">
                    🍕
                </span>
            </LogoContainer>
            <UserStatus>
                {loggedIn !== "loading" ? (
                    <Fragment>
                        <span role="img" aria-label="user">
                            🖐🏻
                        </span>
                        {loggedIn ? `Hello ${loggedIn.displayName} / ` : ""}
                        {loggedIn ? (
                            <LoginButton onClick={logout}>Log out</LoginButton>
                        ) : (
                            <LoginButton onClick={login}>
                                Log-In / Sign-Up
                            </LoginButton>
                        )}
                    </Fragment>
                ) : (
                    "Loading..."
                )}
            </UserStatus>
        </NavBarContainer>
    );
};
