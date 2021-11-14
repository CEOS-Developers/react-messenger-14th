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

  const addChatRoom = (newChatRoom: any) => {
    const payload: ChatRoomI = {
      ...newChatRoom,
      id: Date.now(),
      users: [userContext.currentUser],
      messages: [],
    };
    dispatchChatRoomContext({
      type: 'chatRoom/addChatRoom',
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
    addChatRoom,
    deleteChatRoom,
  };
};

export default useChatRoom;
