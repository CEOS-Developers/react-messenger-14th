import React, { createContext, useReducer } from 'react';
import { Dispatch } from 'react';
import CHATTINGS from '../data/Chats.json';

type chatroomListAction =
  | {
      type: 'chatrooms/updateMessage';
      data: chatroom;
    }
  | {
      type: 'chatrooms/createChatroom';
      data: number;
    };

export type chat = {
  senderId: number;
  message: string;
};

export type chatroom = {
  friendId: number;
  chats: chat[];
};

export type chatroomList = chatroom[];

export const ChatroomContext = createContext<{
  chatroomListContext: chatroomList;
  chatroomListDispatch: Dispatch<chatroomListAction>;
}>({
  chatroomListContext: CHATTINGS,
  chatroomListDispatch: () => null,
});

const ChatroomContextProvider = ({ children }: any) => {
  const [chatroomListContext, chatroomListDispatch] = useReducer(
    chatroomListReducer,
    CHATTINGS
  );

  return (
    <ChatroomContext.Provider
      value={{
        chatroomListContext,
        chatroomListDispatch,
      }}
    >
      {children}
    </ChatroomContext.Provider>
  );
};

const chatroomListReducer = (
  state: chatroomList,
  action: chatroomListAction
): chatroomList => {
  switch (action.type) {
    case 'chatrooms/updateMessage':
      const restChatrooms = state.filter(
        (chatroom) => chatroom.friendId !== action.data.friendId
      );
      return [action.data, ...restChatrooms];

    case 'chatrooms/createChatroom':
      return [...state, { friendId: action.data, chats: [] }];
    default:
      return state;
  }
};

export default ChatroomContextProvider;
export { chatroomListReducer };
