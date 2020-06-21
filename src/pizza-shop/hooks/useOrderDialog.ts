import { useState } from "react";
import { OrderDialogInterface } from "../utils";

export const useOrderDialog = (): OrderDialogInterface => {
    const [openOrderDialog, setOpenOrderDialog] = useState(false);
    return {
        openOrderDialog,
        setOpenOrderDialog,
    };
};
