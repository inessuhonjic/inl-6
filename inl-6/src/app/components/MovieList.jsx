'use client';
const MovieList = ({ movies }) => {
    return (
    <ul>
        {movies.map((movie, index) => (
    <li className="position-relative" key={index}>
      {movie.title}
        <span>{movie.rating &&
          Array.from({ length: movie.rating }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star"/>
          ))}
          </span>
          <span className="position-absolute end-0"><img  src="/images/delete.png" alt="delete"/></span>
    </li>
    ))}
    </ul>
        
    
    
)};
export default MovieList;