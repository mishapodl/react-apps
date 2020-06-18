import { useState } from "react";

export const useChoice = (defaultChoice: any) => {
    const [value, setValue] = useState(defaultChoice);

    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange,
    };
};
