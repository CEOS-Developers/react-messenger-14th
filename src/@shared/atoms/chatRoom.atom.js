import { useState } from 'react';

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
  constructor() {
    this.chatRooms = [];
    this.currentChatRoom = {};
    this.setters = [];
  }

  setChatRooms(nextState) {
    this.chatRooms = [...nextState];
  }

  setCurrentChatRoom(nextState) {
    this.currentChatRoom = { ...nextState };
  }

  setChatRoomUsers(nextState) {
    this.chatRooms.forEach((chatRoom) => {
      if (chatRoom.id === this.currentChatRoom.id) {
        return {
          id: chatRoom.id,
          users: [...nextState],
          messages: chatRoom.messages,
        };
      }
      return chatRoom;
    });
  }

  setChatRoomMessages(nextState) {
    this.chatRooms.forEach((chatRoom) => {
      if (chatRoom.id === this.currentChatRoom.id) {
        return {
          id: chatRoom.id,
          users: chatRoom.users,
          messages: [...nextState],
        };
      }
      return chatRoom;
    });
  }
}

export const chatRoomAtom = new ChatRoomAtom();

/** Getters & Setters */
export const useChatRoomAtom = () => {
  const [atom, setAtom] = useState(chatRoomAtom.chatRooms);

  const setState = (nextState) => {
    chatRoomAtom.setChatRooms(nextState);

    // For Reloading Custom Hook
    setAtom(chatRoomAtom.chatRooms);
  };

  return [chatRoomAtom.chatRooms, setState];
};

export const useChatRoomUsersAtom = () => {
  const [atom, setAtom] = useState(chatRoomAtom.currentChatRoom?.users);

  const setState = (nextState) => {
    chatRoomAtom.setChatRoomUsers(nextState);

    // For Reloading Custom Hook
    setAtom(chatRoomAtom.currentChatRoom.users);
  };

  return [chatRoomAtom.currentChatRoom?.users, setState];
};

export const useChatRoomMessagesAtom = () => {
  const [atom, setAtom] = useState(chatRoomAtom.currentChatRoom?.messages);

  const setState = (nextState) => {
    chatRoomAtom.setChatRoomMessages(nextState);

    // For Reloading Custom Hook
    setAtom(chatRoomAtom.currentChatRoom.messages);
  };

  return [chatRoomAtom.currentChatRoom?.messages, setState];
};

export const useCurrentChatRoomAtom = () => {
  const [atom, setAtom] = useState(chatRoomAtom.currentChatRoom);

  const setState = (nextState) => {
    chatRoomAtom.setCurrentChatRoom(nextState);

    // For Reloading Custom Hook
    setAtom(chatRoomAtom.currentChatRoom);
  };

  return [chatRoomAtom.currentChatRoom, setState];
};
