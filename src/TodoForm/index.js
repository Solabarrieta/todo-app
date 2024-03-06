import React from "react";
import './TodoForm.css'

function TodoForm() {
  return (
    <form>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Hacer curso de React.js"
      />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
        <button className="TodoForm-button TodoForm-button--ok">Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }