import React from 'react';
import Trello from './trello/Trello';
import { AppStateProvider } from './trello/AppStateContext';

const App = () => {
    return (
        <AppStateProvider>
            <Trello />
        </AppStateProvider>
    );
};

export default App;
