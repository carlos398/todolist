import React from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "../todoContext";


function TodoCounter() {

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    
    return (
        <div className="Header">
            <h2>Tus tareas</h2>
            <h3>Tareas realizadas: {completedTodos} de {totalTodos}</h3>
        </div>
    );
}

export { TodoCounter };