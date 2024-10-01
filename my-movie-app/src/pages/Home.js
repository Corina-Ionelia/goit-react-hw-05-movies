import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/movieApi'; // Importăm funcția de fetch

const Home = () => {
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);

        useEffect(() => {
            const getTrendingMovies = async() => {
                try {
                    const data = await fetchTrendingMovies();
                    setMovies(data.results); // Setăm lista de filme
                } catch (error) {
                    setError(error.message);
                }
            };

            getTrendingMovies();
        }, []);

        return ( <
            div >
            <
            h1 > Filme Populare < /h1> {
                error && < p > { error } < /p>} <
                    ul > {
                        movies.map(movie => ( <
                            li key = { movie.id } > { movie.title } < /li>
                        ))
                    } <
                    /ul> <
                    /div>
            );
        };

        export default Home;