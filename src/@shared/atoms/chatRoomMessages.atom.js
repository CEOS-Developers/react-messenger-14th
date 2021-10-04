import { useState, useEffect } from 'react';

class ChatRoomMessagesAtom {
  constructor() {
    this.state = [];
    this.setters = [];
  }

  setState(nextState) {
    this.state = [...nextState];
  }

  update(setter) {
    if (this.setters.includes(setter)) {
      return;
    }

    this.setters.push(setter);

    // Clean Up Func
    return () => {
      const idx = this.setters.findIndex(setter);
      this.setters.splice(idx, 1);
    };
  }
}

export const chatRoomMessagesAtom = new ChatRoomMessagesAtom();

const useChatRoomMessagesAtom = (Atom) => {
  const [messages, setMessages] = useState(Atom.state);

  useEffect(() => {
    const cleaner = Atom.update(() => {
      setMessages(Atom.state);
    });

    return cleaner;
  }, [Atom]);

  const setState = (nextState) => {
    Atom.setState(nextState);
  };

  return [Atom.state, setState];
};

export default useChatRoomMessagesAtom;
