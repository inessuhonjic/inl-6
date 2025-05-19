"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from  './components/addMovieForm';
import Button from './components/Button';
import MovieList from './components/MovieList';



export default function Home() {
  const [movies, setMovies] = useState([
  {
  title : "Film",
  rating : "3"
  },
]);

  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Min filmlista</h1>
      <h2 className="text-center">Lägg till en film</h2>
      <hr></hr>
      <Form /> 
      <Button text="I'm a button" onClick={() => {alert("Clicked!")}} />
      <MovieList movies={movies} />
    </div>

  );
}