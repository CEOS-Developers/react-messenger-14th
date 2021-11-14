import React from 'react';
import useUserContext from '../../@shared/hooks/useUser';
import {
  ListItemContent,
  ListItemTitle,
  ListWrapper,
  ListItemWrapper,
} from '../../@shared/components/ListItem';
import { useHistory } from 'react-router-dom';
import { ChatRoomI } from '../../@shared/contexts/chatRoom';

interface ChatRoomItemI {
  chatRoom?: ChatRoomI;
}

const ChatRoomItem = ({ chatRoom }: ChatRoomItemI) => {
  const { getCurrentUser, getUsers } = useUserContext();
  const history = useHistory();
  const allUsers = getUsers();
  const currentUser = getCurrentUser();
  const name = chatRoom?.name;
  const chatRoomId = chatRoom?.id;
  const userIds = chatRoom?.users;
  const users = allUsers.filter((user) => userIds?.includes(user.id));

  return (
    <ListWrapper
      onClick={() => {
        history.push(`/chat-rooms/${chatRoomId}`);
      }}
    >
      <ListItemTitle>{name}</ListItemTitle>
      <ListItemWrapper>
        <ListItemTitle>참여자: </ListItemTitle>
        {users?.map((user) => (
          <ListItemTitle>{user.name}</ListItemTitle>
        ))}
      </ListItemWrapper>
    </ListWrapper>
  );
};

export default ChatRoomItem;
