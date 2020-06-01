import styled from "styled-components";
import { pizzaRed, logo } from "./colors";

interface FoodProps {
    img: string;
}

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
    background-image: url("img/banner.jpeg");
    background-position: center;
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

export const FoodContainer = styled(TitleContainer)`
    height: 100px;
    padding: 10px;
    font-family: 20px;
    background-image: ${(props: FoodProps) => `url(${props.img});`};
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 7px;
    margin-top: 5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: .2s;
    box-shadow: 0 0px 2px 0 grey;
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        margin-top: 0;
        margin-bottom: 5px;
        box-shadow: 0 5px 10px 0 grey;
    }
`;
export const FoodLabel = styled.div`
    position: absolute;
    background-color: #ffffffcc;
    padding: 5px;
`;
