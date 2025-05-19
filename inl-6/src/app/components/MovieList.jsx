'use client';
const MovieList = ({ movies, onRemoveMovie }) => {
    /*
    Skapar komponenten MovieList med movies och onRemoveMovie som props. 
    */ 
    return (
    <div>
        <h3 className="text-center">Inlagda Filmer!</h3>
        <ul>
        {movies.map((movie, index) => (
    <li className="position-relative" key={index}>
      {movie.title}
        <span className="">
            {movie.rating && Array.from({ length: movie.rating }, (_, i) => ( // skapar en array med movie.rating tomma platser
            <img key={i} src="/images/star.png" alt="star"/> // lägger in lika många stjärnor som tomma platser i arrayen
          ))}
          </span>

          <span className="position-absolute end-0"><img src="/images/delete.png" 
          alt="delete"
          onClick={() => onRemoveMovie(index)} // när kryssbilden klickas körs onRemoveMovie som tar bort ett listobjekt givet dess index
          /></span>
      
    </li>
    ))}
    </ul>
    </div>
    
        
    
    
)};
export default MovieList;