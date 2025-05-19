"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from  './components/addMovieForm';
import Button from './components/Button';
import MovieList from './components/MovieList';



export default function Home() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const newMovie = "";
  const handleAddMovie = () => {
    
    if (title != "" && rating != 0) {

      const newMovie = {
        title: title,
        rating: rating
      };

    setMovies([...movies, newMovie]);

    setTitle("");
    setRating("");


    } else {
      alert("Ojdå, fyll i alla fält!")
    }
  };

  const handleRemoveMovie = (index) => {
    // Filtrera bort filmen som matchar indexet
    const updatedMovies = movies.filter((movie, i) => i !== index);
    setMovies(updatedMovies);
  };
  
  const sortByABC = () => {
    const sorted = [...movies].sort((a,b) => {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();

    if (titleA < titleB){
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  setMovies(sorted);
  };
  


   const sortByRating= () => {
    const sorted = [...movies].sort((a,b) => b.rating - a.rating);
    setMovies(sorted);
  };
  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Min filmlista</h1>
      <h2 className="text-center">Lägg till en film</h2>
      <hr></hr>
      <Form  
      title={title}
      rating={rating}
      onTitleChange={(e) => setTitle(e.target.value)}
      onRatingChange = {(e) => setRating(e.target.value)}
      onAddMovie={handleAddMovie}
      /> 
        <MovieList movies={movies} onRemoveMovie={handleRemoveMovie} />
        <Button text="Sortera Alfabetiskt" onClick={sortByABC} />
        <Button text="Sortera efter betyg" onClick={sortByRating} />
        
      
      
    </div>

  );
}