// src/pages/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
    return ( <
        div >
        <
        h3 > { movie.title } < /h3> <
        p > { movie.overview } < /p> { /* Adaugă alte detalii despre film aici */ } <
        /div>
    );
};

export default MovieCard;