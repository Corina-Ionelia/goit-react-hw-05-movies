// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div `
  padding: 20px;
`;

const MovieList = styled.ul `
  list-style-type: none;
  padding: 0;
`;

const MovieItem = styled.li `
  margin: 10px 0;

  a {
    text-decoration: none;
    color: blue;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTrendingMovies = async() => {
            try {
                const trendingMovies = await fetchTrendingMovies();
                setMovies(trendingMovies);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            } finally {
                setLoading(false);
            }
        };

        getTrendingMovies();
    }, []);

    return ( <
            HomeContainer >
            <
            h1 > Trending Movies < /h1> {
            loading ? ( <
                p > Loading... < /p>
            ) : ( <
                MovieList > {
                    movies.map(movie => ( <
                        MovieItem key = { movie.id } >
                        <
                        Link to = { `/movies/${movie.id}` } > { movie.title } <
                        /Link> < /
                        MovieItem >
                    ))
                } <
                /MovieList>
            )
        } <
        /HomeContainer>
);
};

export default Home;