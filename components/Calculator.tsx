import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  const handleInput = (value: string) => {
    setInput(prev => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="p-5 bg-white rounded shadow-md">
      <div className="mb-5">
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={input}
          readOnly
        />
        <div className="text-right">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"].map((item, index) => (
          <button
            key={index}
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleInput(item)}
          >
            {item}
          </button>
        ))}
        <button className="col-span-2 p-2 bg-green-500 text-white rounded" onClick={calculate}>
          Calculate
        </button>
        <button className="col-span-2 p-2 bg-red-500 text-white rounded" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;