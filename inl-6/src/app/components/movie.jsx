'use client'
function Movie ({title, rating}) {
    return (
         <li className="flex items-center justify-between">
      {title} {rating}
      <img src="../delete.png" alt="Ta bort film" />
    </li>
    )
}

export default Movie;