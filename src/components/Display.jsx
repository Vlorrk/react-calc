const Display = ({ value, onKeyPress }) => {
  return (
    <input
      className="display"
      onKeyDown={onKeyPress}
      value={value}
      type="character"
    />
  );
};

export default Display;
