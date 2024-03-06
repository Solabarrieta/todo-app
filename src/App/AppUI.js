import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { LoadingTodo } from '../Loading';
import { ErrorComponent } from '../Error';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <LoadingTodo />
            <LoadingTodo />
            <LoadingTodo />
          </>
        )}
        {error && <ErrorComponent />}
        {!loading && searchedTodos.length < 1 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
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

export { AppUI }