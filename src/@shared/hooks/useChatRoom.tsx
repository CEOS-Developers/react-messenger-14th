import { useContext } from 'react';
import { ChatRoomContext, MessageI } from '../contexts/chatRoom';
import { ChatRoomI } from '../contexts/chatRoom';
import { UserContext } from '../contexts/user';

const useChatRoom = () => {
  const { chatRoomContext, dispatchChatRoomContext } =
    useContext(ChatRoomContext);
  const { userContext, dispatchUserContext } = useContext(UserContext);

  const getChatRooms = () => {
    return chatRoomContext?.chatRooms;
  };

  const getCurrentChatRoom = () => {
    return chatRoomContext?.currentChatRoom;
  };

  const setCurrentChatRoom = (newCurrentChatRoom: any) => {
    dispatchChatRoomContext({
      type: 'chatRoom/setCurrentChatRoom',
      payload: newCurrentChatRoom,
    });
  };

  const getMessages = () => {
    return chatRoomContext?.currentChatRoom?.messages;
  };

  const postMessage = (newMessage: MessageI) => {
    dispatchChatRoomContext({
      type: 'chatRoom/postMessage',
      payload: newMessage,
    });
  };

  const inviteUser = (invitedUser: number) => {
    dispatchChatRoomContext({
      type: 'chatRoom/inviteUser',
      payload: invitedUser,
    });
  };

  const createChatRoom = (newChatRoom: any) => {
    const payload: ChatRoomI = {
      ...newChatRoom,
      id: Date.now(),
      messages: [],
    };
    dispatchChatRoomContext({
      type: 'chatRoom/createChatRoom',
      payload: newChatRoom,
    });
  };

  const deleteChatRoom = () => {};

  return {
    getChatRooms,
    getCurrentChatRoom,
    setCurrentChatRoom,
    getMessages,
    postMessage,
    inviteUser,
    createChatRoom,
    deleteChatRoom,
  };
};

export default useChatRoom;
