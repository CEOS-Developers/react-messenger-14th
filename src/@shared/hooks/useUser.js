import { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { defaultProfileImg } from '../contexts/user';

const useUserContext = () => {
  const { userContext, dispatchUserContext } = useContext(UserContext);

  const getUsers = () => {
    return userContext.users;
  };

  const addUser = (newUser) => {
    dispatchUserContext({
      type: 'user/addUser',
      payload: {
        id: Date.now(),
        name: newUser.name,
        img: defaultProfileImg,
      },
    });
  };

  const getCurrentUser = () => {
    return userContext.currentUser;
  };

  const setCurrentUser = (newCurrentUser) => {
    dispatchUserContext({
      type: 'user/setCurrentUser',
      payload: newCurrentUser,
    });
  };

  return { getUsers, addUser, getCurrentUser, setCurrentUser };
};

export default useUserContext;
