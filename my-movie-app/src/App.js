// src/App.js

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importă componentele folosind React.lazy
const Home = React.lazy(() =>
    import ('./pages/Home'));
const Movies = React.lazy(() =>
    import ('./pages/Movies'));
const MovieDetails = React.lazy(() =>
    import ('./pages/MovieDetails'));
const Cast = React.lazy(() =>
    import ('./pages/Cast'));
const Reviews = React.lazy(() =>
    import ('./pages/Reviews'));

function App() {
    return ( <
        Suspense fallback = { < div > Loading... < /div>}> <
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
            Route path = "/movies/:movieId/cast"
            element = { < Cast / > }
            /> <
            Route path = "/movies/:movieId/reviews"
            element = { < Reviews / > }
            /> < /
            Routes > <
            /Suspense>
        );
    }

    export default App;