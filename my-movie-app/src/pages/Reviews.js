import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// în Cast.js, MovieDetails.js, și Reviews.js
import { fetchMovieDetails, fetchMovieCast, fetchMovieReviews } from '../api/api'; // corectează calea în funcție de structura directorului tău


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return ( <
        div > {
            reviews.length ? ( <
                ul > {
                    reviews.map(review => ( <
                        li key = { review.id } >
                        <
                        h3 > { review.author } < /h3> <
                        p > { review.content } < /p> < /
                        li >
                    ))
                } <
                /ul>
            ) : ( <
                p > No reviews available
                for this movie. < /p>
            )
        } <
        /div>
    );
};

export default Reviews;