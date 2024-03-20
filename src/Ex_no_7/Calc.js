import React, { useState } from "react";
import "./calc.css";
const Calc = () => {
  const [n1, Setn1] = useState("");
  const [n2, Setn2] = useState("");
  const [res, Setres] = useState("");

  function clear() {
    Setn1("");
    Setn2("");
    Setres("");
  }

  return (
    <>
      <div className="wrap">
        <div className="row">
          <label>Enter number 1:</label>
          <input value={n1} onChange={(e) => Setn1(e.target.value)} />
        </div>
        <div className="row">
          <label>Enter number 2:</label>
          <input value={n2} onChange={(e) => Setn2(e.target.value)} />
        </div>
        <div className="row">
          <p>
            Result:<span>{res}</span>
          </p>
        </div>
        <div className="row">
          <button onClick={() => Setres(parseInt(n1) + parseInt(n2))}>
            ADD
          </button>
          <button onClick={() => Setres(parseInt(n1) - parseInt(n2))}>
            SUB
          </button>
          <button onClick={() => Setres(parseInt(n1) * parseInt(n2))}>
            MUL
          </button>
        </div>
        <div className="row">
          <button onClick={() => Setres(parseInt(n1) / parseInt(n2))}>
            DIV
          </button>
          <button onClick={() => Setres(parseInt(n1) % parseInt(n2))}>
            MOD
          </button>
          <button onClick={() => Setres(parseInt(n1) ** parseInt(n2))}>
            EXPO
          </button>
        </div>
        <div className="row">
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </>
  );
};

export default Calc;
