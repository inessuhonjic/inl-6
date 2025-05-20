'use client';
const MovieList = ({ movies, onRemoveMovie }) => {
  /*
  Skapar komponenten MovieList med movies och onRemoveMovie som props. 
  */
  return (


    <div className="container-fluid">
      <h3 className="text mt-3">Inlagda filmer</h3>
      <ul className="list-group list-group rounded mt-3 mb-3 w-100 flex-grow-1">

        {movies.map((movie, index) => (
          <li className="position-relative list-group-item list-group-item-secondary lead m-1 pe-4" key={index}>
            {movie.title}
            
            <span className="m-3">
              {movie.rating && Array.from({ length: movie.rating }, (_, i) => ( // Skapar en array med movie.rating tomma platser
                <img key={i} 
                src="/images/star.png" 
                alt="star" 
                className="star-icon img-fluid"/> // Lägger in lika många stjärnor som tomma platser i arrayen
              ))}
            </span>

            <span className="position-absolute end-0">
              <img src="/images/delete.png"
              className= "delete-icon img-fluid ms-2"
              alt="delete"
              onClick={() => onRemoveMovie(index)} // När kryssbilden klickas körs onRemoveMovie som tar bort ett listobjekt givet dess index
            /></span>
          </li>
        ))}

      </ul>
    </div>

  )
};
export default MovieList;