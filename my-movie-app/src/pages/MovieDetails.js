import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async() => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
            const data = await response.json();
            setMovie(data);
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) return <p > Loading... < /p>;

    return ( <
        div >
        <
        h1 > { movie.title } < /h1> <
        p > { movie.overview } < /p> <
        p > Release Date: { movie.release_date } < /p> <
        p > Rating: { movie.vote_average } < /p> { / * Aici poți adăuga și alte informații despre film * / } < /
        div >
    );
}

export default MovieDetails;