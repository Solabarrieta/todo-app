import "./TodoSearch.css";

import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Hacer curso React.js"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
