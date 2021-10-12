import { useReducer, createContext } from 'react';

/** TYPE DEFINITION */
// user = {
//   name: '',
//   id: Date.now(),
// }

// currentUser = {
//  name: user.name
// userID: user.id
// }

export const defaultProfileImg = Object.freeze(
  'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
);

export const UserContext = createContext();

const initialUser = {
  name: '양기욱',
  id: Date.now(),
  img: defaultProfileImg,
};

const initialState = {
  users: [
    {
      name: 'test',
      id: Date.now() + 1,
      img: defaultProfileImg,
    },
    initialUser,
  ],
  currentUser: initialUser,
};

const UserReducer = (state, action) => {
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
      break;
  }
};

export const UserContextProvider = ({ children }) => {
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
