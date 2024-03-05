import React from "react";
import { AppUI } from "./AppUI"
import { useLocalStorage } from "./useLocalSotrage.js";

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
    const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading
  } = useLocalStorage('TODOS_V1', []);
  console.log('TODOs: ', todos)
  
  const [searchValue, setSearchValue] = React.useState("");
  
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchedText = searchValue.toLowerCase();
    return todoText.includes(searchedText);
  });

  const toggleCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
