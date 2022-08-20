import { Textfit } from "react-textfit";

const Display = ({ value }) => {
  return (
    <Textfit className="display" mode="single" max={100}>
      {value}
    </Textfit>
  );
};

export default Display;
