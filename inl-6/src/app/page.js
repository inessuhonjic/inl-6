"use client";

import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/Button'


export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button text="I'm a button" onClick={() => alert("Clicked!")} />
    </div>

  );
}