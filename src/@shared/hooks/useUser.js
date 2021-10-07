import { useUserAtom, useCurrentUserAtom } from '../atoms/user.atom';

export const useUsers = () => {
  const [users, setUsers] = useUserAtom();

  const handleCreateUser = (newUser) => {
    setUsers([...users, { ...newUser }]);
  };

  const handleDeleteUser = () => {};

  const handleUpdateUser = (updatedUser) => {
    const newUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });

    setUsers(newUsers);
  };

  return { users, handleCreateUser, handleDeleteUser, handleUpdateUser };
};

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useCurrentUserAtom();

  const handleChangeCurrentUser = (user) => {
    setCurrentUser(user);
  };

  return { currentUser, handleChangeCurrentUser };
};
