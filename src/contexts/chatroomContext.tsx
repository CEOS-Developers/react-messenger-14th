import React, { createContext, useReducer } from 'react';
import { Dispatch } from 'react';
import CHATTINGS from '../data/Chats.json';

const ChatroomContextProvider = ({ children }: any) => {
  const [chatroomContext, chatroomListDispatch] = useReducer(
    chatroomListReducer,
    CHATTINGS
  );

  return (
    <ChatroomContext.Provider value={{ chatroomContext, chatroomListDispatch }}>
      {children}
    </ChatroomContext.Provider>
  );
};

type chatroomAction = {
  type: 'chatrooms/updateMessage';
  data: chatroom;
};

const chatroomListReducer = (
  state: chatroomList,
  action: chatroomAction
): chatroomList => {
  switch (action.type) {
    case 'chatrooms/updateMessage':
      return [...state, action.data];
    default:
      return state;
  }
};

const chatroomReducer = (state: chatroom, action: any) => {
  switch (action.type) {
    case 'chatroom/sendMessage':
      return {
        ...state,
        chats: [...state.chats, action.data],
      };

    default:
      return state;
  }
};

export const ChatroomContext = createContext<{
  chatroomContext: chatroomList;
  chatroomListDispatch: Dispatch<chatroomAction>;
}>({
  chatroomContext: CHATTINGS,
  chatroomListDispatch: () => null,
});

export default ChatroomContextProvider;
export { chatroomListReducer, chatroomReducer };

export type chat = {
  senderId: number;
  message: string;
};

export type chatroom = {
  friendId: number;
  chats: chat[];
};

export type chatroomList = chatroom[];
