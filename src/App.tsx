import React from 'react';
import { AppConteiner } from './styles';
import { Card } from './Card';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';

const App = () => {
    const { state } = useAppState();
    return (
        <AppConteiner>
            {state.lists.map((list, i) => (
                <Column text={list.text} key={list.id} index={i} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}
            />
        </AppConteiner>
    );
};

export default App;
