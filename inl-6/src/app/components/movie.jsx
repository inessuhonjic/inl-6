'use client';
const Movie = (title, rating) => {
    return (
        <div rating={rating}>
        {title}
    </div>
    );
};

export default Movie;