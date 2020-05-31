import styled from "styled-components";
import { pizzaRed, logo } from "./colors";

export const NavBarContainer = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
`;
const TitleContainer = styled.div`
    font-family: "Righteous", cursive;
`;
export const LogoContainer = styled(TitleContainer)`
    font-size: 20px;
    color: ${logo};
    text-shadow: 1px 1px 4px #380502;
`;
