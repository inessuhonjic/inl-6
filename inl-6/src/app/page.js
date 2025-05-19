import 'bootstrap/dist/css/bootstrap.css';

function MyButton() {
  return ( 
    <button className="btn btn-primary">I'm a button</button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <MyButton />
    </div>

  );
}



