import React from 'react';
import { GlobalStyle } from './styles/globalSyle';
import { NavBar } from "./NavBar/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <GlobalStyle />
            <div>Test</div>
        </>
    );
}

export default App;
