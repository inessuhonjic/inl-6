"use client";
import { useState } from "react";
/*Komponenten Form triggar igång onAddMovie() när användaren klickar på 'Lägg till film'. 
Komponenten tar emot 5 props: title, rating, onAddMovie, onTitleChange och onRatingChange. 
onTitleChange och OnRatingChange är eventhanterare som uppdaterar filmlistan med hjälp av useState */
function Form({ onAddMovie }) {
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(title, rating);
    setTitle("")
    setRating("")
  };
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title-field">Titel:</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Skriv en film"
          />

          <label htmlFor="rating-field">Betyg:</label>
          <select
            type="text"
            id="rating-field"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="btn btn-success mt-2" type="submit">Lägg till en film!</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;