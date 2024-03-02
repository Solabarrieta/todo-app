import React from "react";

/*
* La convención para custom Hooks es que la función debe emepezar por la palabra use
*/
function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        console.log('1')
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItems) {
          localStorage.setItem('TODOS_V1', JSON.stringify([]));
          parsedItem = JSON.parse(localStorageItems);
        } else {
          parsedItem = JSON.parse(localStorageItems)
          setItem(parsedItem)
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    }, 2000)
  }, [itemName])

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export {useLocalStorage};