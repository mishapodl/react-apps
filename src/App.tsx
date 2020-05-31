import React from 'react';
import { GlobalStyle } from './styles/globalSyle';
import { NavBar } from "./NavBar/NavBar";
import { Banner } from "./Banner/Banner";

function App() {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Banner />
            <div>Hello Sliceline</div>
        </>
    );
}

export default App;
