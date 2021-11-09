const useLocalStorage = () => {
  const setItem = <T>(itemName: string, item: T): void => {
    localStorage.setItem(itemName, JSON.stringify(item));
  };

  const getItem = (itemName: string): any => {
    const item = localStorage.getItem(itemName);
    return item && JSON.parse(item);
  };

  return [setItem, getItem];
};

export default useLocalStorage;
