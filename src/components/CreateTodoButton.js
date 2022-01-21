import React from "react";
import "../css/CreateTodoButton.css"
function CreateTodoButton() {

    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button
         onClick={() => onClickButton('alerta creada por parametro')} 
         className="CreateTodoButton">+</button>
    );
}

export {CreateTodoButton}