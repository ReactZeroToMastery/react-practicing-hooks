import React, { useRef, useEffect, useState } from "react";
import "./style.css";

export default function App() {
  let [values, setValues] = useState([1, 2, 3, 4, 5]);
  let pTags = useRef([]);

  useEffect(() => {
    pTags.current[0].style.color = "red";
    console.log(pTags);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {values.map((ele, index) => {
        return (
          <p
            key={index}
            ref={el => {
              pTags.current[index] = el;
              return pTags.current[index];
            }}
          >
            Start editing to see some magic happen :)
          </p>
        );
      })}
    </div>
  );
}
