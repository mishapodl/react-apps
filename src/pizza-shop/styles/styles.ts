import styled from "styled-components";
import {
    pizzaRed,
    logo,
    black,
    white,
    grey,
    white_transparent,
    grey_shadow,
} from "./colors";

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
    box-shadow: 0 0px 2px 0 ${grey};
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        margin-top: 0;
        margin-bottom: 5px;
        box-shadow: ${grey_shadow};
    }
`;
export const FoodLabel = styled(TitleContainer)`
    position: absolute;
    background-color: ${white_transparent};
    padding: 5px;
    border-top-left-radius: 7px;
`;

export const FoodDialogContainerStyle = styled.div`
    width: 500px;
    background-color: ${white};
    position: fixed;
    top: 75px;
    z-index: 5;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;
export const FoodDialogContent = styled.div`
    overflow: auto;
    height: 100px;
    padding-left: 30px;
    padding-bottom: 80px;
`;
export const FoodDialogFooter = styled.div`
    box-shadow: 0 -2px 10px 0 grey;
    height: 60px;
    display: flex;
    justify-content: center;
`;
export const FoodDialogConfirmButton = styled(TitleContainer)`
    margin: 10px;
    color: ${white};
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${pizzaRed};
`;
export const FoodDialogContainerShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: ${black};
    opacity: 0.7;
    z-index: 4;
`;

export const FoodDialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }: FoodProps) =>
        img ? `background-image: url(${img});` : `min-height: 75px;`}
    background-position: center;
    background-size: cover;
`;

export const FoodDialogBannerName = styled(FoodLabel)`
    top: ${({ img }: FoodProps) => (img ? `100px;` : `20px;`)};
    font-size: 30px;
    padding: 5px 40px;
    border-top-left-radius: 0;
`;

export const OrderContainer = styled.div`
    position: fixed;
    right: 0;
    top: 46px;
    width: 340px;
    background-color: ${white};
    height: calc(100% - 46px);
    z-index: 10;
    box-shadow: ${grey_shadow};
    display: flex;
    flex-direction: column;
`;

export const OrderContent = styled(FoodDialogContent)`
    padding: 20px;
    height: 100%;
`;
export const OrderConainerItem = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid grey;
`;
export const OrderItem = styled.div`
    display: grid;
    grid-template-columns: 2px 150px 20px 60px;
    justify-content: space-between;
    padding: 10px 0;
`;
export const DetailItem = styled.div`
    color: grey;
    font-size: 10px;
    margin-left: 25px;
    margin-right: 20px;
`;
export const QuantityInput = styled.input`
    font-size: 18px;
    width: 25px;
    text-align: center;
    border: none;
    outline: none;
`;
export const IncrementContainer = styled(TitleContainer)`
    display: flex;
    height: 24px;
`;
export const IncrementButton = styled.button`
    width: 23px;
    font-size: 20px;
    padding: -12px;
    text-align: center;
    cursor: pointer;
    line-height: 23px;
    margin: 0 10px;
    color: ${pizzaRed};
    border-radius: 5px;
    border: 1px solid ${pizzaRed};
    border-radius: 0;
    ${({ disabled }: any) =>
        disabled &&
        `
            opacity: 0.5;  
            pointer-events: none;
        `};
    &:hover {
        background-color: #ffe3e3;
    }
`;
export const ToppingsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3fr, 1fr);
`;
export const ToppingsCheckBox = styled.input`
    margin-right: 10px;
    cursor: pointer;
`;
export const ToppingsLabel = styled.label`
    cursor: pointer;
`;
