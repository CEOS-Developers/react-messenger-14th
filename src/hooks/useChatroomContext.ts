import { useContext } from 'react';
import { ChatroomContext, chatroom } from '../contexts/chatroomContext';
import useUserContext from './useUserContext';

const useChatroomContext = () => {
  const { chatroomListContext, chatroomListDispatch } =
    useContext(ChatroomContext);
  const { getSingleFriend } = useUserContext();

  const getChatroomList = () => {
    // chatroomContext에는 채팅 목록과, 채팅하는 친구의 id만을 가진다
    // 따라서 userContext에서 채팅방의 친구 id로 친구의 정보를 가져와서 렌더링한다
    // (chatroom, friend type 참고)

    return chatroomListContext.map((chatroom: chatroom) => {
      const chattingFriend = getSingleFriend(chatroom.friendId);

      return {
        id: chattingFriend.id,
        name: chattingFriend.name,
        lastMessage: chatroom.chats[chatroom.chats.length - 1].message,
        profileImage: chattingFriend.profileImage,
      };
    });
  };

  const getCurrentChatroom = (friendId: number | string): chatroom => {
    return chatroomListContext.find(
      (chatroom) => chatroom.friendId === parseInt(friendId as string)
    )!;

    // chatroomDispatch({
    //   type: 'chatroom/setChatroom',
    //   data: chatroomListContext.find(
    //     (chatroom) => chatroom.friendId === parseInt(friendId as string)
    //   )!,
    // });

    // return chatroomContext;
  };

  const updateChatroomList = (chatroom: chatroom) => {
    chatroomListDispatch({ type: 'chatrooms/updateMessage', data: chatroom });
  };

  // const getMessages = (friendId: number): chat[] => {
  //   setCurrentChatroom(friendId);
  //   // return chatroomListContext.find(
  //   //   (chatroom) => chatroom.friendId === friendId
  //   // )?.chats!;
  //   return chatroomContext.chats;
  // };

  return {
    getChatroomList,
    getCurrentChatroom,
    updateChatroomList,
    postMessage,
  };
};

export default useChatroomContext;
