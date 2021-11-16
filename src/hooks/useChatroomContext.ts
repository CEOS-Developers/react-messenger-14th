import React, { useContext } from 'react';
import {
  chatroomList,
  ChatroomContext,
  chatroomReducer,
  chatroom,
} from '../contexts/chatroomContext';
import useUserContext from './useUserContext';

const useChatroomContext = () => {
  const { chatroomContext, chatroomListDispatch } = useContext(ChatroomContext);
  const { getSingleFriend } = useUserContext();

  const getChatroomList = () => {
    // chatroomContext에는 채팅 목록과, 채팅하는 친구의 id만을 가진다
    // 따라서 userContext에서 채팅방의 친구 id로 친구의 정보를 가져와서 렌더링한다
    // (chatroom, friend type 참고)

    return chatroomContext.map((chatroom: chatroom) => {
      const chattingFriend = getSingleFriend(chatroom.friendId);

      return {
        id: chattingFriend.id,
        name: chattingFriend.name,
        lastMessage: chatroom.chats[chatroom.chats.length - 1].message,
        profileImage: chattingFriend.profileImage,
      };
    });
  };

  const getSingleChatroom = (friendId: number): chatroom => {
    return chatroomContext.find((chatroom) => chatroom.friendId === friendId)!;
  };

  const updateChatroomList = (chatroom: chatroom) => {
    chatroomListDispatch({ type: 'chatrooms/updateMessage', data: chatroom });
  };

  return { getChatroomList, getSingleChatroom, updateChatroomList };
};

export default useChatroomContext;
