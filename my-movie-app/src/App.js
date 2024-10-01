import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails'; // Importă componenta MovieDetails

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/movies"
        element = { < Movies / > }
        /> <
        Route path = "/movies/:movieId"
        element = { < MovieDetails / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;