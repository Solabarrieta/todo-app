import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    serchedTodos,
    toggleCompleteTodo,
    deleteTodo
}) {
    return (
    <>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
            {loading && <p> Estamos cargando...</p>}
            {error && <p> Hubo un error</p>}
            {!loading && serchedTodos.length < 1 && <p>Ya puedes crear tus TODOs</p>}
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

export {AppUI}