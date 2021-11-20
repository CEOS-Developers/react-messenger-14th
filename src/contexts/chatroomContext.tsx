import React, { createContext, Reducer, useReducer } from 'react';
import { Dispatch } from 'react';
import CHATTINGS from '../data/Chats.json';

const ChatroomContextProvider = ({ children }: any) => {
  const [chatroomListContext, chatroomListDispatch] = useReducer(
    chatroomListReducer,
    CHATTINGS
  );

  const [chatroomContext, chatroomDispatch] = useReducer(
    chatroomReducer,
    initialChatroom
  );

  return (
    <ChatroomContext.Provider
      value={{
        chatroomListContext,
        chatroomContext,
        chatroomListDispatch,
        chatroomDispatch,
      }}
    >
      {children}
    </ChatroomContext.Provider>
  );
};

type chatroomListAction = {
  type: 'chatrooms/updateMessage';
  data: chatroom;
};

type chatroomAction =
  | {
      type: 'chatroom/sendMessage';
      data: chat;
    }
  | {
      type: 'chatroom/setChatroom';
      data: chatroom;
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
    default:
      return state;
  }
};

const chatroomReducer = (state: chatroom, action: chatroomAction): chatroom => {
  /* chatroom을 context에서 갖지 않으니까 리듀서를 못쓰는 문제가 발생... 
  chatroom의 초기값을 null로 두고 chatroom도 context에 넣을지 고민해보자... */
  switch (action.type) {
    case 'chatroom/sendMessage':
      return {
        friendId: state.friendId,
        chats: [...state.chats, action.data],
      };
    case 'chatroom/setChatroom':
      return action.data;

    default:
      return state;
  }
};

const initialChatroom: chatroom = {
  friendId: -1,
  chats: [
    {
      senderId: -1,
      message: '',
    },
  ],
};

export const ChatroomContext = createContext<{
  chatroomListContext: chatroomList;
  chatroomContext: chatroom;
  chatroomListDispatch: Dispatch<chatroomListAction>;
  chatroomDispatch: Dispatch<chatroomAction>;
}>({
  chatroomListContext: CHATTINGS,
  chatroomContext: initialChatroom,
  chatroomListDispatch: () => null,
  chatroomDispatch: () => null,
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
