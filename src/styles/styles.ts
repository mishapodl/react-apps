import styled from "styled-components";
import { pizzaRed, logo } from "./colors";

export const NavBarContainer = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 1;
`;
const TitleContainer = styled.div`
    font-family: "Righteous", cursive;
`;
export const LogoContainer = styled(TitleContainer)`
    font-size: 20px;
    color: ${logo};
    text-shadow: 1px 1px 4px #380502;
`;
export const BannerContainer = styled.div`
    height: 200px;
    background-image: url("img/pizza.jpg");
    background-position: 20% 0%;
    background-size: cover;
    filter: contrast(75%);
`;
export const MenuContainer = styled.div`
    height: 1000px;
    margin: 0 400px 50px 20px;
`;
export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const Food = styled.div`
    height: 100px;
    background-image: ${({ img }) => `url(${img});`}
`;
