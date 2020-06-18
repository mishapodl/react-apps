import React from "react";
import {
    QuantityInput,
    IncrementButton,
    IncrementContainer,
} from "../../styles/styles";
import { QuantityObject } from "../../utils";

interface QuantityProps {
    quantitys: QuantityObject;
}

export const Quantity = ({ quantitys }: QuantityProps) => {
    const { quantity, onChange, setQuantity } = quantitys;

    return (
        <IncrementContainer>
            <div>Quantity:</div>
            <IncrementButton
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
            >
                -
            </IncrementButton>
            <QuantityInput onChange={onChange} value={quantity} />
            <IncrementButton onClick={() => setQuantity(quantity + 1)}>
                +
            </IncrementButton>
        </IncrementContainer>
    );
};
