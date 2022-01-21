import React from "react";
import "../css/TodoSearch.css";

function TodoSearch() {

    const [searchVlue, setSearchValue] = React.useState('');

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