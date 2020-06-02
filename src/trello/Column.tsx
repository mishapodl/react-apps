import React from 'react';
import { ColumnConteiner, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Card } from './Card';

interface ColumnProps {
    text: string;
    index: number;
}

export const Column = ({ text, index }: ColumnProps) => {
    const { state } = useAppState();
    return (
        <ColumnConteiner>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map(({ id, text }) => (
                <Card text={text} key={id} />
            ))}
            <AddNewItem
                toggleButtonText={'+ Add another task'}
                onAdd={console.log}
                dark
            />
        </ColumnConteiner>
    );
};
