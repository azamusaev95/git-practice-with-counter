import "./Button.css";

function Button({ children, handleClick }) {
  console.log(children);
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
