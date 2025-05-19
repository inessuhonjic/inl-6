'use client';
const MovieList = ({ movies, onRemoveMovie }) => {
    return (
    <div>
        <h3 className="text-center">Inlagda Filmer!</h3>
        <ul className="list-group list-group-flush m-5">
        {movies.map((movie, index) => (
    <li className="position-relative list-group-item lead" key={index}>
      {movie.title}
        <span className="m-3 img-fluid">{movie.rating &&
          Array.from({ length: movie.rating }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star" id="star"/>
          ))}
          </span>

          <span className="position-absolute end-0"><img src="/images/delete.png" 
          alt="delete"
          id="delete"
          onClick={() => onRemoveMovie(index)}
          /></span>
      
    </li>
    ))}
    </ul>
    </div>
    
        
    
    
)};
export default MovieList;