'use client';
const MovieList = ({ movies, onRemoveMovie }) => {
  /*
  Skapar komponenten MovieList med movies och onRemoveMovie som props. 
  */
  return (


    <div className="container-fluid">
      <h3 className="text mt-3">Inlagda filmer</h3>
      <ul className="list-group list-group rounded mt-3 mb-3">

        {movies.map((movie, index) => (
          <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center lead" key={index}>
            {movie.title}
            
            <div className="d-flex flex-wrap align-items-center gap-2 me-3">
              {movie.rating && Array.from({ length: movie.rating }, (_, i) => ( // Skapar en array med movie.rating tomma platser
                <img key={i} 
                src="/images/star.png" 
                alt="star" 
                className="star-icon"/> // Lägger in lika många stjärnor som tomma platser i arrayen
              ))}
            

            
              <img src="/images/delete.png"
              className= "delete-icon"
              alt="delete"
              onClick={() => onRemoveMovie(index)} // När kryssbilden klickas körs onRemoveMovie som tar bort ett listobjekt givet dess index
            /></div>
          </li>
        ))}

      </ul>
    </div>

  )
};
export default MovieList;