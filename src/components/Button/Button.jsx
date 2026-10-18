import "./Button.css";

export const Button = (props) => {
  return (
    <button className="button-style">
      {props.children}
    </button>
  );
};
