import { useState, useEffect } from 'react';

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

// Global State for "User"
class UserAtom {
  constructor(currentUser) {
    this.users = [
      {
        name: 'test',
        id: Date.now() + 1,
        img: defaultProfileImg,
      },
      currentUser,
    ];
    this.currentUser = { ...currentUser };
  }

  setUsers(nextState) {
    this.users = [...nextState];
  }

  setCurrentUser(nextState) {
    this.currentUser = { ...nextState };
  }
}

export const userAtom = new UserAtom({
  name: '양기욱',
  id: Date.now(),
  img: defaultProfileImg,
});

/** Getters & Setters */
export const useUserAtom = () => {
  const [atom, setAtom] = useState(userAtom.users);

  const setState = (nextState) => {
    userAtom.setUsers(nextState);

    setAtom(nextState);
  };

  return [userAtom.users, setState];
};

export const useCurrentUserAtom = () => {
  const [atom, setAtom] = useState(userAtom.currentUser);

  const setState = (nextState) => {
    userAtom.setCurrentUser(nextState);

    setAtom(nextState);
  };

  return [userAtom.currentUser, setState];
};
