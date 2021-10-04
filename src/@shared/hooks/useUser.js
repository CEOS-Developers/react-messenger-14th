import useUserAtom, { userAtom, CurrentUserT } from '../atoms/currentUser.atom';

const useUser = () => {
  const [currentUser, setCurrentUser] = useUserAtom(userAtom);

  const changeCurrentUser = () => {
    if (currentUser === CurrentUserT.UserA) {
      setCurrentUser(CurrentUserT.UserB);
    } else {
      setCurrentUser(CurrentUserT.UserA);
    }
  };

  return { currentUser, changeCurrentUser };
};

export default useUser;
