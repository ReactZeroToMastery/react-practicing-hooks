import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

const ReactRedux = () => {
  let dispatch = useDispatch();
  const text = useSelector(state => state.text);

  return (
    <div onClick={() => dispatch({ type: "UPDATETEXT", data: "NEW TEXT" })}>
      {text === "" ? "somevalue" : text}
    </div>
  );
};

export default ReactRedux;
