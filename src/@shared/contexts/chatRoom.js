import { useReducer, createContext, useContext } from 'react';
import { UserContext } from './user';

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
export const ChatRoomContext = createContext();

const ChatRoomReducer = (state, action) => {
  switch (action.type) {
    case 'chatRoom/inviteUser':
      return {
        ...state,
        currentChatRoom: {
          ...state.currentChatRoom,
          users: [...state.currentChatRoom.users, action.payload],
        },
      };
    case 'chatRoom/postMessage':
      return {
        ...state,
        currentChatRoom: {
          ...state.currentChatRoom,
          messages: [...state.currentChatRoom.messages, action.payload],
        },
      };

    case 'chatRoom/addChatRoom':
      return {
        ...state,
        chatRooms: [...state.chatRooms, action.payload],
      };

    case 'chatRoom/deleteChatRoom':
      return {
        ...state,
        chatRooms: state.chatRooms.filter(
          (chatRoom) => chatRoom.id !== action.payload.chatRoomID
        ),
      };

    case 'chatRoom/setCurrentChatRoom':
      return {
        ...state,
        currentChatRoom: action.payload,
      };

    default:
      break;
  }
};

export const ChatRoomContextProvider = ({ children }) => {
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
