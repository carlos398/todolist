import React from "react";
import "./App.css";
import { TodoContext } from "./todoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./Modal"
import { TodoForm } from "./components/TodoForm";

function AppUI() {
  const { error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="container">
        <div className="Trgeta_Tareas">
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {error && <p>Error pa, desesperate </p>}
            {loading && <p>Estamos cargando</p>}
            {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
              />
            ))}
          </TodoList>

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
          <CreateTodoButton setOpenModal={setOpenModal}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUI };
