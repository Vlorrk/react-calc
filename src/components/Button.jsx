const Button = ({ value, classColor, onClick }) => {
  return (
    <button className={classColor} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
