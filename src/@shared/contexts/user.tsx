import React, { useReducer, createContext } from 'react';
import { DispatchT } from '../../hooks';
import { usersJson } from '../../static/mock-data/users';

export interface UserI {
  name: string;
  id: number;
  img: string;
}

export interface UserContextI {
  users: UserI[];
  currentUser: UserI;
}

export const defaultProfileImg =
  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';

const initialUser: UserI = {
  name: 'test',
  id: Date.now() - 1,
  img: defaultProfileImg,
};
const initialState: UserContextI = {
  users: [...JSON.parse(usersJson), initialUser],
  currentUser: initialUser,
};

export const UserContext = createContext<{
  userContext: UserContextI;
  dispatchUserContext: DispatchT;
}>({ userContext: initialState, dispatchUserContext: () => null });

const UserReducer = (
  state: UserContextI = initialState,
  action: any
): UserContextI => {
  switch (action.type) {
    case 'user/setUsers':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case 'user/setCurrentUser':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

interface UserCtxProviderI {
  children?: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserCtxProviderI) => {
  const [userContext, dispatchUserContext] = useReducer(
    UserReducer,
    initialState
  );

  return (
    <UserContext.Provider value={{ userContext, dispatchUserContext }}>
      {children}
    </UserContext.Provider>
  );
};
