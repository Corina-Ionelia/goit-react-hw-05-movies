const API_KEY = '9218c668648688dcc4813b68b4a52589'; // Înlocuiește cu cheia ta API
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async() => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Eroare la preluarea filmelor');
    }
    return response.json();
};