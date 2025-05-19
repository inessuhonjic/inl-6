'use client';
const MovieList = ({ movies, onRemoveMovie }) => {
    return (
    <div>
        <h3 className="text-center">Inlagda Filmer!</h3>
        <ul>
        {movies.map((movie, index) => (
    <li className="position-relative" key={index}>
      {movie.title}
        <span className="">{movie.rating &&
          Array.from({ length: movie.rating }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star"/>
          ))}
          </span>

          <span className="position-absolute end-0"><img src="/images/delete.png" 
          alt="delete"
          onClick={() => onRemoveMovie(index)}
          /></span>
      
    </li>
    ))}
    </ul>
    </div>
    
        
    
    
)};
export default MovieList;