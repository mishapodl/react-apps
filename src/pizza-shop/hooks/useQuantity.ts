import { ChangeEvent, useState } from "react";

export const useQuantity = (defaultQuantity: number) => {
    const [quantity, setQuantity] = useState(defaultQuantity || 1);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const quant: number = +e.target.value >= 1 ? +e.target.value : 1;
        setQuantity(quant);
    };

    return {
        quantity,
        setQuantity,
        onChange,
    };
};
