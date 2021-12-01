import { useContext } from 'react';
import { friend, UserContext } from '../contexts/userContext';

const useUserContext = () => {
  const { friends, friendsDispatch } = useContext(UserContext);

  const getFriendList = (): friend[] => friends;

  const getSingleFriend = (friendId: number): friend =>
    friends.find((friend) => friend.id === friendId)!;

  const addNewFriend = (friend: friend) => {
    friendsDispatch({ type: 'user/addFriend', data: friend });
  };

  return { getFriendList, getSingleFriend, addNewFriend };
};

export default useUserContext;
