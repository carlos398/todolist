import React from "react";
import "../css/TodoCounter.css";


function TodoCounter({totalTodos, completedTodos}) {

    
    return (
        <div className="Header">
            <h2>Tus tareas</h2>
            <h3>Tareas realizadas: {completedTodos} de {totalTodos}</h3>
        </div>
    );
}

export { TodoCounter };