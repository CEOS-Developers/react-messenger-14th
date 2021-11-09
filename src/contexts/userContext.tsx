import React, { useReducer, createContext, useState } from 'react';
import Friends from '../data/Friends.json';
import useLocalStorage from '../hooks/useLocalStorage';

type friend = {
  id: number;
  name: string;
  statusMessage: string;
  profileImage: string;
};

const UserContext: React.Context<friend[]> = createContext([
  {
    id: 0,
    name: '',
    statusMessage: '',
    profileImage: '',
  },
]);

const UserContextProvider = ({ children }: any) => {
  const [friends] = useState(Friends);

  return (
    <UserContext.Provider value={friends}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
export { UserContext };
export type { friend };
