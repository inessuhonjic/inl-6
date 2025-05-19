'use client';
const MovieList = ({ movies }) => {
    return (
    <div>
        {movies.map((movie, index) => (
        <div key={index}>
      <h3>{movie.title}</h3>
      <p>
        <span>{movie.rating &&
          Array.from({ length: movie.rating }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star"/>
          ))}
          </span>
          
          <span><img src="/images/delete.png" alt="delete"/></span>
      </p>
    </div>
    ))}
    </div>
    
)};
export default MovieList;