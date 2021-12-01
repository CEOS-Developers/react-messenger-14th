import React, { createContext, useReducer, Dispatch } from 'react';
import Friends from '../data/Friends.json';
import useLocalStorage from '../hooks/useLocalStorage';

type friend = {
  id: number;
  name: string;
  statusMessage: string;
  profileImage: string;
};

type userReducerAction =
  | {
      type: 'user/addFriend';
      data: friend;
    }
  | {
      type: 'user/deleteFriend';
      data: number;
    };

const initialFriends: friend[] = [
  {
    id: 0,
    name: '',
    statusMessage: '',
    profileImage: '',
  },
];

const UserContext = createContext<{
  friends: friend[];
  friendsDispatch: Dispatch<userReducerAction>;
}>({
  friends: initialFriends,
  friendsDispatch: () => null,
});

const UserContextProvider = ({ children }: any) => {
  const [friends, friendsDispatch] = useReducer(userReducer, Friends);

  return (
    <UserContext.Provider value={{ friends, friendsDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const userReducer = (state: friend[], action: userReducerAction): friend[] => {
  switch (action.type) {
    case 'user/addFriend':
      return [...state, action.data];

    case 'user/deleteFriend':
      return state.filter((friend) => friend.id !== action.data);
  }
};

export default UserContextProvider;
export { UserContext };
export type { friend };
