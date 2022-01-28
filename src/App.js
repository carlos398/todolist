import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar curso de intro a react', completed: true},
//   {text: 'Cortar papa', completed: false},
//   {text: 'llorar con la llorona', completed: false},

// ]

function useLocalStorage(itemName, initialValue) {

  const [error, seterror] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  const [itemValue, setItemValue] = React.useState(initialValue);

  React.useEffect(() =>{
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItemValue(parsedItem)
        setLoading(false)
      } catch (error) {
        seterror(error)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItemValue(newItem);
    } catch (error) {
      seterror(error)
    }
  };

  return {itemValue, saveItem, loading, error};
}

function App(props) {
  const { 
    itemValue: todosValue, 
    saveItem:saveTodos, 
    loading, error } = useLocalStorage("TODOS_V1", []);

  const [searchVlue, setSearchValue] = React.useState("");

  const completedTodos = todosValue.filter((todo) => !!todo.completed).length;
  const totalTodos = todosValue.length;

  let searchedTodos = [];

  if (!searchVlue.length >= 1) {
    searchedTodos = todosValue;
  } else {
    searchedTodos = todosValue.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchVlue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todosValue.findIndex((todo) => todo.text === text);

    const newTodos = [...todosValue];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todosValue.findIndex((todo) => todo.text === text);

    const newTodos = [...todosValue];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchVlue={searchVlue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
