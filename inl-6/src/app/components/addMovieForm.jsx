


import React from "react";
const AddMovie = ({ placeholder, onChange, value, onAddMovie }) => {
  return(
    
    <div className="flex max-w-md flex-col gap-4">
        <input type = "text" 
        placeholder={placeholder}
        onChange={onChange} 
        value={value}/>

        <button onClick={onAddMovie}>Lägg till</button>
    </div>
    
  
)}
export default AddMovie;

