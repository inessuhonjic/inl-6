import React from "react";

const AddMovie = ({ title, rating, onAddMovie, onRatingChange, onTitleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(); // Anropar funktionen som skickas via props
  };
  return (


    <div className="flex max-w-md flex-col gap-4">
      <form className="w-full max-w-sm" method="post" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-1">
          <div className="inline-block relative w-64">
            <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="titleField">
              Titel:
            </label>
          </div>
        </div>
        <div className="md:w-2/3">
          <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="titleField"
            type="text"
            placeholder="Titel.."
            value={title}
            onChange={onTitleChange}
          ></input>
        </div>





        <div className="inline-block relative w-64 mb-6">
          <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="ratingField">Betyg:</label>
          <select className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            id="ratingField"
            value={rating}
            onChange={onRatingChange}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>




        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Lägg till
            </button>
          </div>
        </div>
      </form>
    </div>


  )
}


export default AddMovie;