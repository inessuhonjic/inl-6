'use client'
import { useState } from "react";
import AddMovie from "../app/components/addMovieForm"
import Movie from "../app/components/movie"

export default function Home() {
const [movies, setMovies] = useState ([])
const [title, setTitle] = useState ("")
const [rating, setRating] = useState ("")
 


  /*Funktion som anropas när man klickar på "Lägg till film" - se längre ner för anrop - väldigt osäker på syntax - men propsen onAddMovie skickar med själva funktionen:
        <AddMovie 
        title={title} -> props för titel och samma för rating under
        rating={rating}
        onTitleChange={(e) => setTitle(e.target.value)}  -> anonym funktion `? setTitle tar 'e.target.value' - hämtar värdet som matades in med event och ändrar värdet i titel till den nya som angavs
        onRatingChange={(e) => setRating(e.target.value)} -> forts. onChange är en event handler (typ eventlistener?) som används för att fånga upp förändringar i formelement - skickas som props från komponenten
       onAddMovie={handleAddMovie}/> -> triggar igång alltihopa eftersom Lägg till knappen trycktes på

  */

  const handleAddMovie = () => {
      const newMovie = {
      title: title,
      rating: rating
    };
      setMovies([...movies,newMovie]); // lägger till ny titel i movie - listan - men hur gör man för att lägga till rating stars också?!
      
      setTitle(""); // nollställer inputfält
      setRating(""); // nollställer ratingfält
    };

  return (
    <div className ="flex flex-col items-center">

      <h1 className ="text-2xl font-bold mb-4">Min filmlista</h1>

      <h2 className ="text font-bold mb-4">Lägg till film </h2>
      
      
      <AddMovie 
        title={title}
        rating={rating}
        onTitleChange={(e) => setTitle(e.target.value)}
        onRatingChange={(e) => setRating(e.target.value)}
       onAddMovie={handleAddMovie}/> 
      <hr />

      <h2 className ="text font-bold mb-4">Filmer</h2> 
      <hr />
      <ul>
        
    {movies.map((movie, index) => (
  <Movie key={index} title={movie.title} rating={movie.rating} />
))}   
    

      </ul>
    </div>
    
  );

}


