import React from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "../todoContext";

function TodoSearch( ) {

    const { searchVlue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return (
        <input
         className="InputSearch" 
         placeholder="Search..." 
         value={searchVlue}
         onChange={onSearchValueChange}/>
    );
}

export {TodoSearch}