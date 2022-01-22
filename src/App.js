import React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso de intro a react', completed: true},
  {text: 'Cortar papa', completed: false},
  {text: 'llorar con la llorona', completed: false},

]

function App(props) {

  const [todosValue, setTodosValue] = React.useState(defaultTodos);

  const [searchVlue, setSearchValue] = React.useState('');

  const completedTodos = todosValue.filter(todo => !!todo.completed).length;
  const totalTodos = todosValue.length;

  let searchedTodos = [];

  if ( !searchVlue.length >= 1 ){
    searchedTodos = todosValue;
  } else{ 
    searchedTodos = todosValue.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchVlue.toLowerCase();

      return todoText.includes(searchText)
    })
    
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="Trgeta_Tareas">

          <TodoCounter
           totalTodos={totalTodos} 
           completedTodos={completedTodos}/>

          <TodoSearch
           searchVlue={searchVlue} 
           setSearchValue={setSearchValue}/>
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
          </TodoList>
          <CreateTodoButton/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
