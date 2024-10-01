// src/pages/Movies.js

import React, { useState } from 'react';
import { searchMovies } from '../api/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MoviesContainer = styled.div `
  padding: 20px;
`;

const Form = styled.form `
  margin-bottom: 20px;
`;

const Input = styled.input `
  padding: 10px;
  margin-right: 10px;
`;

const Button = styled.button `
  padding: 10px;
`;

const Movies = () => {
        const [query, setQuery] = useState('');
        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(false);

        const handleSearch = async(e) => {
            e.preventDefault();
            setLoading(true);

            try {
                const searchResults = await searchMovies(query);
                setMovies(searchResults);
            } catch (error) {
                console.error("Error searching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        return ( <
            MoviesContainer >
            <
            h1 > Search Movies < /h1> <
            Form onSubmit = { handleSearch } >
            <
            Input type = "text"
            value = { query }
            onChange = {
                (e) => setQuery(e.target.value)
            }
            placeholder = "Search for a movie" /
            >
            <
            Button type = "submit" > Search < /Button> < /
            Form > {
                loading && < p > Loading... < /p>} <
                ul > {
                    movies.map(movie => ( <
                        li key = { movie.id } >
                        <
                        Link to = { `/movies/${movie.id}` } > { movie.title } <
                        /Link> < /
                        li >
                    ))
                } <
                /ul> < /
                MoviesContainer >
            );
        };

        export default Movies;