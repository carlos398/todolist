import React from "react";
import "../css/TodoCounter.css";


function TodoCounter() {
    return (
        <div className="Header">
            <h2>Tus tareas</h2>
            <h3>Tareas realizadas: 3 de 5</h3>
        </div>
    );
}

export { TodoCounter };