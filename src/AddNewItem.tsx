import React, { useState } from 'react';
import { AddItemButton } from './styles';
import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
    onAdd(text: string): void;
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showFrom, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;

    if (showFrom) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text);
                    setShowForm(false);
                }}
            />
        );
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    );
};