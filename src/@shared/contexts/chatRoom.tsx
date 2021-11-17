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
  users: (number | undefined)[];
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
          (chatRoom: ChatRoomI) => chatRoom.id !== action.payload.chatRoomId
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

  const initialChatRooms = [
    {
      id: Date.now(),
      name: 'Room for All',
      users: userContext.users.map((user) => user.id),
      messages: [],
    },
    {
      id: Date.now() + 1,
      name: 'Room for Danes and Netflix',
      users: userContext.users.map((user) => {
        if (user.name === 'Danes' || user.name === 'NEtflix') return user.id;
      }),
      messages: [],
    },
    {
      id: Date.now() + 2,
      name: 'Room for politi & test',
      users: userContext.users.map((user) => {
        if (user.name === 'Politi' || user.name === 'test') return user.id;
      }),
      messages: [],
    },
    {
      id: Date.now() + 3,
      name: 'Room 4 Politi, test, Urban',
      users: userContext.users.map((user) => {
        if (
          user.name === 'Politi' ||
          user.name === 'test' ||
          user.name === 'Urban'
        )
          return user.id;
      }),
      messages: [],
    },
    {
      id: Date.now() + 4,
      name: 'Room 4 Engine, Jake, Abstract and Cordo',
      users: userContext.users.map((user) => {
        if (
          user.name === 'Engine' ||
          user.name === 'Jake' ||
          user.name === 'Abstract' ||
          user.name === 'Cordo'
        ) {
          return user.id;
        }
      }),
      messages: [],
    },
  ];

  const initialState: ChatRoomContextI = {
    chatRooms: initialChatRooms,
    currentChatRoom: initialChatRooms[0],
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
