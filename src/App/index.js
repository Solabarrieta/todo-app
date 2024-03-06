import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI"

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: "Hacer curso React.js", completed: true },
//   { text: "Hacer curso Optimización LinkedIn", completed: true },
//   { text: "Hacer curso AWS", completed: false },
//   { text: "Hacer curso Docker", completed: false },
//   { text: "Hacer curso de creación de CV", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
