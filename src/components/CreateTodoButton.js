import React from "react";
import "../css/CreateTodoButton.css"
function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(preVstate => !preVstate);
    };

    return(
        <button
         onClick={onClickButton} 
         className="CreateTodoButton">+</button>
    );
}

export {CreateTodoButton}