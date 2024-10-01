// src/pages/Reviews.js

import React from 'react';

const Reviews = ({ reviews }) => {
    return ( <
        div >
        <
        h2 > Reviews < /h2> {
            reviews.length > 0 ? ( <
                ul > {
                    reviews.map(review => ( <
                        li key = { review.id } >
                        <
                        h3 > { review.author } < /h3> <
                        p > { review.content } < /p> <
                        /li>
                    ))
                } <
                /ul>
            ) : ( <
                p > No reviews available. < /p>
            )
        } <
        /div>
    );
};

export default Reviews;