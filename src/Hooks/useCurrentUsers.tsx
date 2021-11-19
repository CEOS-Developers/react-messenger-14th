import { useEffect, useState } from 'react';

export default function useCurrentUsers(state: any) {
  const [searchingText, setSearchingText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [currentUsers, setCurrentUsers] = useState(state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchingText(e.target.value);
  };

  const searchResult = state.filter((e: { name: string }) =>
    e.name.includes(searchingText)
  );

  const handleClickSearch = () => {
    setIsSearching(!isSearching);
  };

  useEffect(() => {
    if (isSearching) {
      setCurrentUsers(searchResult);
    } else {
      setCurrentUsers(state);
    }
  }, [state, isSearching, searchingText]);

  return { currentUsers, handleClickSearch, handleChange, isSearching };
}
