"use client";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;