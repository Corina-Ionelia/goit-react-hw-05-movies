// src/pages/MovieDetails.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, fetchMovieReviews } from '../api/api';
import styled from 'styled-components';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsContainer = styled.div `
  padding: 20px;
`;

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovieDetails = async() => {
            try {
                const movieDetails = await fetchMovieDetails(movieId);
                const movieCredits = await fetchMovieCredits(movieId);
                const movieReviews = await fetchMovieReviews(movieId);

                setMovie(movieDetails);
                setCast(movieCredits);
                setReviews(movieReviews);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [movieId]);

    if (loading) {
        return <p > Loading... < /p>;
    }

    return ( <
        MovieDetailsContainer >
        <
        h1 > { movie.title } < /h1> <
        p > { movie.overview } < /p> <
        Cast cast = { cast }
        /> <
        Reviews reviews = { reviews }
        /> <
        Link to = "/movies" > Back to Movies < /Link> < /
        MovieDetailsContainer >
    );
};

export default MovieDetails;