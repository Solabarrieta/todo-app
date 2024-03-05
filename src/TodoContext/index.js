// import React from "react";
// import { useLocalStorage } from "./useLocalSotrage";

// const TodoContext = React.createContext();

// function TodoProvider({children}) {
//   const {
//     item: todos,
//     saveItem: saveTodos,
//     error,
//     loading
//   } = useLocalStorage('TODOS_V1', []);
//   console.log('TODOs: ', todos)

//   const [searchValue, setSearchValue] = React.useState("");
  
//   const completedTodos = todos.filter((todo) => !!todo.completed).length;
//   const totalTodos = todos.length;

//   const searchedTodos = todos.filter((todo) => {
//     const todoText = todo.text.toLowerCase();
//     const searchedText = searchValue.toLowerCase();
//     return todoText.includes(searchedText);
//   });

//   const toggleCompleteTodo = (text) => {
//     const newTodos = [...todos];
//     const todoIndex = newTodos.findIndex((todo) => todo.text === text);
//     newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
//     saveTodos(newTodos);
//   };

//   const deleteTodo = (text) => {
//     const newTodos = [...todos];
//     const todoIndex = newTodos.findIndex((todo) => todo.text === text);
//     newTodos.splice(todoIndex, 1);
//     saveTodos(newTodos);
//   };
//   return (
//     <TodoContext.Provider value={{
//       loading,
//       error,
//       completedTodos,
//       totalTodos,
//       searchValue,
//       setSearchValue,
//       searchedTodos,
//       toggleCompleteTodo,
//       deleteTodo
//     }}>
//       {children}
//     </TodoContext.Provider>
//   )
// }

// export { TodoContext, TodoProvider }