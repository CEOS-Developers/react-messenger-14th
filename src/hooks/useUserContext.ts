import { useContext } from 'react';
import { friend, UserContext } from '../contexts/userContext';

const useUserContext = () => {
  const friends = useContext(UserContext);

  const getFriendList = (): friend[] => friends;

  const getSingleFriend = (friendId: number): friend =>
    friends.find((friend) => friend.id === friendId)!;

  return { getFriendList, getSingleFriend };
};

export default useUserContext;
