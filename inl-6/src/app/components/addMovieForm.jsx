"use client";

function Form ({title, rating, onAddMovie, onRatingChange, onTitleChange}) {
  const handleSubmit = (e) => {
      e.preventDefault();
      onAddMovie();
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
            onChange={onTitleChange}
            placeholder="Skriv en film"
            />

            <label htmlFor="rating-field">Betyg:</label>
            <select 
            type="text" 
            id="rating-field" 
            className="form-control"
            value={rating}
            onChange={onRatingChange}
            >
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="btn btn-success" type="submit">Lägg till en film!</button>
        </fieldset>
    </form>
    </div>
  );
};

export default Form;