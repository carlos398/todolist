import react from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso de intro a react', completed: true},
  {text: 'Cortar papa', completed: false},
  {text: 'llorar con la llorona', completed: true},

]

function App(props) {
  return (
    <react.Fragment>
      <div className="container">
        <div className="Trgeta_Tareas">
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
          </TodoList>
          <CreateTodoButton/>
        </div>
      </div>
    </react.Fragment>
  );
}

export default App;
