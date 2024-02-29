import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  { text: "Hacer curso React.js", completed: true },
  { text: "Hacer curso Optimización LinkedIn", completed: true },
  { text: "Hacer curso AWS", completed: false },
  { text: "Hacer curso Docker", completed: false },
  { text: "Hacer curso de creación de CV", completed: true },
];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


/*
* La convención para custom Hooks es que la función debe emepezar por la palabra use
*/
function useLocalStorage(itemName, initialValue) {

  const localStorageItems = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItems) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedItem = JSON.parse(localStorageItems);
  } else {
    parsedItem = JSON.parse(localStorageItems)
  }

    const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
  }

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;



  const serchedTodos = todos.filter((todo) => {
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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {serchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
