'use client'
import { useState } from "react";
import AddMovie from "../app/components/addMovieForm"
import Movie from "../app/components/movie"

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");  

  const handleAddMovie = () => {
      setMovies([...movies, title]); // lägger till ny titel
      setTitle(""); // nollställer inputfält
    };

  return (
    <div className ="flex flex-col items-center">

      <h1 className ="text-2xl font-bold mb-4">Min filmlista</h1>

      <h2 className ="text font-bold mb-4">Lägg till film </h2>
      
      
      <AddMovie 
       placeholder="Skriv en titel"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onAddMovie={handleAddMovie}/>
      <hr />

      <h2 className ="text font-bold mb-4">Filmer</h2> 
      <hr />
      <ul>
        
       {movies.map((movie, index) => (
    <Movie key={index} title={movie} />
  ))}
      </ul>
    </div>
    
  );
}



