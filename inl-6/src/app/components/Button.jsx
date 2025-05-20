"use client";
//en Button-komponent med text och onClick som props. Återanvändbar.
const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-primary me-2 mb-2" onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;