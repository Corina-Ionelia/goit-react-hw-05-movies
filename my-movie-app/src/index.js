import React from 'react';
import ReactDOM from 'react-dom/client'; // Asigură-te că importi corect
import App from './App'; // Calea către componenta ta principală
import { BrowserRouter } from 'react-router-dom'; // Importă BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /React.StrictMode>
);