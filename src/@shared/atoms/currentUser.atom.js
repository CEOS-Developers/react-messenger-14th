import React, { useState, useEffect } from 'react';

// Enum Type 구현
export const CurrentUserT = Object.freeze({
  UserA: Symbol('UserA'),
  UserB: Symbol('UserB'),
});

// Global State for "Current User"
class UserAtom {
  constructor() {
    this.state = CurrentUserT.UserA;
    this.setters = [];
  }

  setState(nextState) {
    this.state = nextState;
  }

  update(setter) {
    if (this.setters.includes(setter)) {
      return;
    }

    this.setters.push(setter);

    // return Clean Up Func
    return () => {
      const idx = this.setters.findIndex(setter);
      this.setters.splice(idx, 1);
    };
  }
}

export const userAtom = new UserAtom();

const useUserAtom = (Atom) => {
  const [currentUser, setCurrentUser] = useState(Atom.state);

  useEffect(() => {
    const cleaner = Atom.update(() => {
      setCurrentUser(Atom.state);
    });

    return cleaner;
  }, [Atom]);

  const setState = (nextState) => {
    Atom.setState(nextState);
  };

  return [Atom.state, setState];
};

export default useUserAtom;
