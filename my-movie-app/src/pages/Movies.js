import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importă Link

function Movies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async(e) => {
        e.preventDefault();

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`);
        const data = await response.json();

        setMovies(data.results);
        setQuery('');
    };

    return ( <
        div >
        <
        h1 > Search Movies < /h1> <
        form onSubmit = { handleSearch } >
        <
        input type = "text"
        value = { query }
        onChange = {
            (e) => setQuery(e.target.value) }
        placeholder = "Search for a movie..." /
        >
        <
        button type = "submit" > Search < /button> <
        /form>

        <
        ul > {
            movies.map(movie => ( <
                li key = { movie.id } >
                <
                Link to = { `/movies/${movie.id}` } > { movie.title } < /Link> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default Movies;