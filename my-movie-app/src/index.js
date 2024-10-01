import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Asigură-te că ai importat stilurile dacă e nevoie

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <
    React.StrictMode >
    <
    BrowserRouter basename = "/goit-react-hw-05-movies" > { /* Aici setăm basename */ } <
    App / >
    <
    /BrowserRouter> <
    /React.StrictMode>
);