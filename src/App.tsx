import React from 'react';
import PizzaShop from './pizza-shop/App';
import Trello from './trello/Trello';
import { AppStateProvider } from './trello/AppStateContext';

function App() {
    return (
        <>
            <PizzaShop />
            <AppStateProvider>
                <Trello />
            </AppStateProvider>
        </>
    );
}

export default App;
