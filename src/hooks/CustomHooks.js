import React from "react";

/*
* La convención para custom Hooks es que la función debe emepezar por la palabra use
*/
function useLocalStorage(itemName, initialValue) {

  const localStorageItems = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItems) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedItem = JSON.parse(localStorageItems);
  } else {
    parsedItem = JSON.parse(localStorageItems)
  }

    const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
  }

  return [item, saveItem];
}

export default useLocalStorage;