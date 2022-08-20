import "./App.css";
import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
import React, { useState } from "react";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const App = () => {
  let [calc, setCalc] = useState({
    operator: "",
    calcNum: 0,
    result: 0,
  });

  const buttonValues = [
    ["c", 7, 8, 9],
    ["+", 4, 5, 6],
    ["-", 1, 2, 3],
    ["/", "0", ".", "="],
  ];

  const handleEquals = () => {
    if (calc.operator && calc.calcNum) {
      const math = (a, b, operator) =>
        operator === "+"
          ? a + b
          : operator === "-"
          ? a - b
          : operator === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        result:
          calc.calcNum === "0" && calc.operator === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.result)),
                  Number(removeSpaces(calc.calcNum)),
                  calc.operator
                )
              ),
        operator: "",
        calcNum: 0,
      });
    }
    console.log(calc.result);
  };

  const handleDecimal = (decimal) => {
    setCalc({
      ...calc,
      calcNum: !calc.calcNum.toString().includes(".")
        ? calc.calcNum + decimal
        : calc.calcNum,
    });
  };
  const handleClear = () => {
    setCalc({
      operator: "",
      calcNum: 0,
      result: 0,
    });
  };

  const handleOperator = (sign) => {
    setCalc({
      ...calc,
      operator: sign,
      result: !calc.result && calc.calcNum ? calc.calcNum : calc.result,
      calcNum: 0,
    });
  };

  const handleNumClick = (input) => {
    setCalc({
      ...calc,
      calcNum:
        calc.calcNum === 0 && input === "0"
          ? "0"
          : removeSpaces(calc.calcNum) % 1 === 0
          ? toLocaleString(Number(removeSpaces(calc.calcNum + input)))
          : toLocaleString(calc.calcNum + input),
      result: !calc.operator ? 0 : calc.result,
    });
  };
  return (
    <React.Fragment>
      <h1 className="pagetitle">calculate </h1>
      <Wrapper>
        <Display value={calc.calcNum ? calc.calcNum : calc.result} />
        <ButtonBox>
          {buttonValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                value={btn}
                classColor={
                  btn === "=" ? "btn btn-danger btn-lg" : "btn btn-dark"
                }
                onClick={
                  btn === "c"
                    ? () => handleClear()
                    : btn === "="
                    ? () => handleEquals()
                    : btn === "/"
                    ? () => handleOperator(btn)
                    : btn === "x"
                    ? () => handleOperator(btn)
                    : btn === "-"
                    ? () => handleOperator(btn)
                    : btn === "+"
                    ? () => handleOperator(btn)
                    : btn === "."
                    ? () => handleDecimal(".")
                    : () => handleNumClick(btn)
                }
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
      <h3 className="bottomtitle">//made by javi</h3>
    </React.Fragment>
  );
};

export default App;
