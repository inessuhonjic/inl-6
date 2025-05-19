'use client';
const MovieList = ({ movies, onRemoveMovie }) => {
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

          <span><img src="/images/delete.png" 
          alt="delete"
          onClick={() => onRemoveMovie(index)}
          /></span>
      </p>
    </div>
    ))}
    </ul>
        
    
    
)};
export default MovieList;