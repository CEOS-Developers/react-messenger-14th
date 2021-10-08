import { useState, useEffect } from 'react';
import { userAtom } from './user.atom';

/** TYPE DEFINITION */
// chatRoom = {
//  id: Date.now()
//  users: [user.id1, user.id2 ... ],
//  messages: [message1, message2 ... ]
// }
//

// message = {
//  content: '',
//  userID: user.id,
// }

// currentChatRoom = {
//   id: chatRoom.id,
//   users: chatRoom.users,
//   messages: chatRoom.messages,
// }

class ChatRoomAtom {
  constructor(chatRoom) {
    this.chatRooms = [{ ...chatRoom }];
    this.currentChatRoom = { ...chatRoom };
  }

  setChatRooms(nextState) {
    this.chatRooms = [...nextState];
  }

  setCurrentChatRoom(nextState) {
    this.currentChatRoom = { ...nextState };
  }
}

export const chatRoomAtom = new ChatRoomAtom({
  id: Date.now(),
  users: [...userAtom.users],
  messages: [],
});

/** Getters & Setters */
export const useChatRoomAtom = () => {
  const [atom, setAtom] = useState(chatRoomAtom.chatRooms);

  const setState = (nextState) => {
    chatRoomAtom.setChatRooms(nextState);

    // for Update
    setAtom(nextState);
  };

  return [chatRoomAtom.chatRooms, setState];
};

export const useCurrentChatRoomAtom = () => {
  const [atom, setAtom] = useState(chatRoomAtom.currentChatRoom);

  const setState = (nextState) => {
    chatRoomAtom.setCurrentChatRoom(nextState);

    // for Update
    setAtom(nextState);
  };

  return [chatRoomAtom.currentChatRoom, setState];
};
