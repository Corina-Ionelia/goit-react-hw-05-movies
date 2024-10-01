import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Modifică importul aici
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Creează un root
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
);
ReactDOM.render( <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter>,
    document.getElementById('root')
);