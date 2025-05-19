import 'bootstrap/dist/css/bootstrap.css';
import Form from  './components/addMovieForm'

function MyButton() {
  return ( 
    <button className="btn btn-primary">I'm a button</button>
  );
}

export default function Home() {
  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">Min filmlista</h1>
      <h2 className="text-center">Lägg till en film</h2>
      <hr></hr>
      <Form />
      <MyButton />
    </div>

  );
}



