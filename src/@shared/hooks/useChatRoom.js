import {
  useChatRoomAtom,
  useChatRoomMessagesAtom,
  useChatRoomUsersAtom,
  useCurrentChatRoomAtom,
} from '../atoms/chatRoom.atom';
import { useCurrentUser } from './useUser';

export const useChatRooms = () => {
  const [chatRooms, setChatRooms] = useChatRoomAtom();
  const [currentChatRoom, setCurrentChatRoom] = useCurrentChatRoomAtom();
  const [currentUser] = useCurrentUser();

  const handleCreateChatRoom = (user) => {
    const newChatRoom = {
      id: Date.now(),
      users: [{ ...currentUser }, { ...user }],
      messages: [],
    };

    setChatRooms([...chatRooms, newChatRoom]);

    setCurrentChatRoom(newChatRoom);
  };

  const handleDeleteChatRoom = () => {};

  return {
    chatRooms,
    handleCreateChatRoom,
    handleDeleteChatRoom,
  };
};

export const useChatRoomUsers = () => {
  const [chatRoomUsers, setChatRoomUsers] = useChatRoomUsersAtom();

  const handleAddChatRoomUser = (newUser) => {
    setChatRoomUsers([...chatRoomUsers, newUser]);
  };

  return { chatRoomUsers, handleAddChatRoomUser };
};

export const useChatRoomMessages = () => {
  const [chatRoomMessages, setChatRoomMessages] = useChatRoomMessagesAtom();

  const handlePostMessage = (newMessage) => {
    setChatRoomMessages([...chatRoomMessages, newMessage]);
  };

  return { chatRoomMessages, handlePostMessage };
};

export const useCurrentChatRoom = () => {
  const [currentChatRoom, setCurrentChatRoom] = useCurrentChatRoomAtom();

  const handleChangeCurrentChatRoom = (chatRoom) => {
    setCurrentChatRoom(chatRoom);
  };

  return { currentChatRoom, handleChangeCurrentChatRoom };
};
