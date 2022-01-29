import React from "react";


function useLocalStorage(itemName, initialValue) {
  const [error, seterror] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [itemValue, setItemValue] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItemValue(parsedItem);
        setLoading(false);
      } catch (error) {
        seterror(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItemValue(newItem);
    } catch (error) {
      seterror(error);
    }
  };

  return { itemValue, saveItem, loading, error };
}

export { useLocalStorage }