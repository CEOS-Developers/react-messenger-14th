import { useEffect } from 'react';
import {
  useChatRoomAtom,
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

export const useCurrentChatRoom = () => {
  const [currentChatRoom, setCurrentChatRoom] = useCurrentChatRoomAtom();

  const handleChangeCurrentChatRoom = (chatRoom) => {
    setCurrentChatRoom(chatRoom);
  };

  const handleAddChatRoomUser = (newUser) => {
    setCurrentChatRoom({
      id: currentChatRoom.id,
      users: [...currentChatRoom.users, newUser],
      messages: currentChatRoom.messages,
    });
  };

  const handlePostMessage = (newMessage) => {
    setCurrentChatRoom({
      id: currentChatRoom.id,
      users: currentChatRoom.users,
      messages: [...currentChatRoom.messages, newMessage],
    });
  };

  return {
    currentChatRoom,
    handleChangeCurrentChatRoom,
    handleAddChatRoomUser,
    handlePostMessage,
  };
};
