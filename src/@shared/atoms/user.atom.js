import { useState } from 'react';

/** TYPE DEFINITION */
// user = {
//   name: '',
//   id: Date.now(),
// }

// currentUser = {
//  name: user.name
// userID: user.id
// }

// Global State for "User"
class UserAtom {
  constructor() {
    this.users = {};
    this.currentUser = {};
    this.setters = [];
  }

  setUsers(nextState) {
    this.users = { ...nextState };
  }

  setCurrentUser(nextState) {
    this.currentUser = { ...nextState };
  }
}

export const userAtom = new UserAtom();

/** Getters & Setters */
export const useUserAtom = () => {
  const [atom, setAtom] = useState(userAtom.users);

  const setState = (nextState) => {
    userAtom.setUsers(nextState);

    // For Reloading Custom Hook
    setAtom(userAtom.users);
  };

  return [userAtom.users, setState];
};

export const useCurrentUserAtom = () => {
  const [atom, setAtom] = useState(userAtom.currentUser);

  const setState = (nextState) => {
    userAtom.setCurrentUser(nextState);

    // For Reloading Custom Hook
    setAtom(userAtom.currentUser);
  };

  return [userAtom.currentUser, setState];
};
