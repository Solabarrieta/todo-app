
import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal(state => !state)
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
