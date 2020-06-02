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
export const FoodGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const FoodContainer = styled.div`
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
    transition-duration: 0.2s;
    box-shadow: 0 0px 2px 0 grey;
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        margin-top: 0;
        margin-bottom: 5px;
        box-shadow: 0 5px 10px 0 grey;
    }
`;
export const FoodLabel = styled(TitleContainer)`
    position: absolute;
    background-color: #ffffffcc;
    padding: 5px;
    border-top-left-radius: 7px;
`;

export const FoodDialogContainer = styled.div`
    width: 500px;
    height: 2000px;
    background-color: #fff;
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
`;
export const FoodDialogContainerShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: #000;
    opacity: 0.7;
    z-index: 4;
`;

export const FoodDialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }: FoodProps) => `background-image: url(${img});`}
    background-position: center;
    background-size: cover;
`;

export const FoodDialogBannerName = styled(FoodLabel)`
    top: 100px;
    font-size: 30px;
    padding: 5px 40px;
    border-top-left-radius: 0;
`;
