import { useReducer, createContext, useContext } from 'react';
import { UserContext } from './user';
import { DispatchT } from '../../hooks';

export interface MessageI {
  content: string;
  userID: number;
}

export interface ChatRoomI {
  id: number;
  name?: string;
  users: number[];
  messages: MessageI[];
}

export interface ChatRoomContextI {
  chatRooms: ChatRoomI[];
  currentChatRoom: ChatRoomI;
}

export const ChatRoomContext = createContext<{
  chatRoomContext: ChatRoomContextI | null;
  dispatchChatRoomContext: DispatchT;
}>({
  chatRoomContext: null,
  dispatchChatRoomContext: () => null,
});

const ChatRoomReducer = (state: ChatRoomContextI, action: any) => {
  switch (action.type) {
    case 'chatRoom/inviteUser':
      return {
        ...state,
        currentChatRoom: {
          ...state.currentChatRoom,
          users: [...state.currentChatRoom?.users, action.payload],
        },
      };
    case 'chatRoom/postMessage':
      const newMessages = state.currentChatRoom.messages
        ? state.currentChatRoom.messages
        : [];
      return {
        ...state,
        currentChatRoom: {
          ...state.currentChatRoom,
          messages: [...newMessages, action.payload],
        },
      };

    case 'chatRoom/createChatRoom':
      return {
        ...state,
        chatRooms: [...state.chatRooms, action.payload],
      };

    case 'chatRoom/deleteChatRoom':
      return {
        ...state,
        chatRooms: state.chatRooms.filter(
          (chatRoom: ChatRoomI) => chatRoom.id !== action.payload.chatRoomID
        ),
      };

    case 'chatRoom/setCurrentChatRoom':
      return {
        ...state,
        currentChatRoom: action.payload,
      };

    default:
      return state;
  }
};

interface ChatRoomContextProviderI {
  children?: React.ReactNode;
}

export const ChatRoomContextProvider = ({
  children,
}: ChatRoomContextProviderI) => {
  const { userContext } = useContext(UserContext);

  const initialChatRoom = {
    id: Date.now(),
    name: 'My First Chat Room',
    users: userContext.users.map((user) => user.id),
    messages: [],
  };

  const initialState = {
    chatRooms: [initialChatRoom],
    currentChatRoom: initialChatRoom,
  };

  const [chatRoomContext, dispatchChatRoomContext] = useReducer(
    ChatRoomReducer,
    initialState
  );

  return (
    <ChatRoomContext.Provider
      value={{ chatRoomContext, dispatchChatRoomContext }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};
