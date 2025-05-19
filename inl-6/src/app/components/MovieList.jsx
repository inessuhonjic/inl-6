'use client';
const MovieList = ({ movies }) => {
    return (
    <div>
        {movies.map((movie, index) => (
        <div key={index}>
      <h3>{movie.title}</h3>
      <p>
        {movie.rating &&
          Array.from({ length: movie.rating }, (_, i) => (
            <img key={i} src="inl-6/src/app/images/star.png" alt="star"/>
          ))}
      </p>
    </div>
    ))}
    </div>
    
)};
export default MovieList;