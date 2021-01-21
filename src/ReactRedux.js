import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

const ReactRedux = () => {
  let dispatch = useDispatch();
  const text = useSelector(state => {
    console.log('State: ', state);
    return state.text;
  });

  return (
    <div onClick={() => dispatch({ type: "UPDATETEXT", data: "NEW TEXT" })}>
      {text}
    </div>
  );
};

export default ReactRedux;
