import { useContext } from 'react';
import { friend, UserContext } from '../contexts/userContext';

const useUserContext = (): [() => friend[]] => {
  const friends = useContext(UserContext);

  const getFriendList = (): friend[] => friends;

  return [getFriendList];
};

export default useUserContext;
