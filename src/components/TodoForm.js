import React from "react";
import { TodoContext } from "../todoContext";
import "../css/TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return ( 
        <form onSubmit={onSubmit}>
            <label>Add your new Todo</label>
            <textarea
             value={newTodoValue}
             onChange={onChange}
             placeholder="Cortar la cebolla para el amuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                 className="TodoForm-button TodoForm-button-cancel"
                 onClick={onCancel} 
                 type="button">
                    Cancelar
                </button>
                <button
                 className="TodoForm-button TodoForm-button-add"
                 type="submit">
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };