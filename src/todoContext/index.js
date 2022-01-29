import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        itemValue: todosValue,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);

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
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchVlue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
          }}>{props.children}
        
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider}
