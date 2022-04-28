import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Button = ({ type, setCount, count }: { type: string; setCount: any; count: number }) => {
  return (
    <>
      {type === "next" && (
        <button type="button" onClick={() => setCount(count + 1)}>
          Next
        </button>
      )}
      {type === "prev" && (
        <button type="button" onClick={() => setCount(count - 1)}>
          Prev
        </button>
      )}
    </>
  );
};

const Child1 = ({ value, setValue }: any) => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>Value1</label>
      <input placeholder="Enter your value1 here" value={value} onChange={handleChange} />
    </div>
  );
};

const Child2 = ({ value, setValue }: any) => {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>Value2</label>
      <input placeholder="Enter your value2 here" value={value} onChange={handleChange} />
    </div>
  );
};

const Child3 = ({ value1, value2 }: { value1: string; value2: string }) => {
  return (
    <div>
      <p>{value1}</p>
      <p>{value2}</p>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const [child1Info, setChild1Info] = useState<string>("");
  const [child2Info, setChild2Info] = useState<string>("");
  return (
    <div style={{ padding: "20px", width: "50vw" }}>
      {count === 0 && <Child1 value={child1Info} setValue={setChild1Info} />}
      {count === 1 && <Child2 value={child2Info} setValue={setChild2Info} />}
      {count === 2 && <Child3 value1={child1Info} value2={child2Info} />}
      <Button type="prev" count={count} setCount={setCount} />
      <Button type="next" count={count} setCount={setCount} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
