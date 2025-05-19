"use client";

import 'bootstrap/dist/css/bootstrap.css';
import Form from  './components/addMovieForm'
"use client";

import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/Button'


export default function Home() {
  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Min filmlista</h1>
      <h2 className="text-center">Lägg till en film</h2>
      <hr></hr>
      <Form />
      <MyButton />
    <div>
      <h1>Hello World!</h1>
      <Button text="I'm a button" onClick={() => alert("Clicked!")} />
    </div>

  );
}