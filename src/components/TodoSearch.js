import React from "react";
import "../css/TodoSearch.css";

function TodoSearch({ searchVlue, setSearchValue} ) {

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