import React, { useState } from 'react';
import { ModalContainer, Modal } from '../../@shared/components/Modal';
import { SelectProfile } from '../../@shared/components/Header';
import useInput from '../../@shared/components/useInput';
import useUserContext from '../../@shared/hooks/useUser';
import { UserI } from '../../@shared/contexts/user';
import styled from 'styled-components';
import useChatRoom from '../../@shared/hooks/useChatRoom';
import { color } from '../../@shared/style/color';
import {
  hoverButtonAnime,
  hoverButtonAnimeGreen,
} from '../../@shared/style/animation';

interface CreateChatRoomModalI extends React.HTMLAttributes<HTMLElement> {}

const CreateChatRoomModal = ({ onClick, ...props }: CreateChatRoomModalI) => {
  const { createChatRoom } = useChatRoom();
  const [chatRoomName, chatRoomNameInput] = useInput({
    placeholder: '채팅방 이름을 입력하세요',
  });

  const { getUsers, getCurrentUser } = useUserContext();
  const allUsers = getUsers();
  const currentUser = getCurrentUser();

  const [selectedUsers, setSelectedUsers] = useState<UserI[]>([currentUser]);

  const handleSelectUser = (e: React.ChangeEvent<any>) => {
    const selectedIdx = e.target.options.selectedIndex;

    if (selectedIdx === 0) {
      return;
    }

    const id = e.target[selectedIdx].id;

    const selectedUser: any = allUsers.find(
      (user: UserI) => Number(user.id) === Number(id)
    );

    setSelectedUsers([selectedUser, ...selectedUsers]);
  };

  const handleCreateChatRoom = (e: React.MouseEvent<HTMLElement>) => {
    if (!chatRoomName || selectedUsers.length === 0) return;

    const newChatRoom = {
      name: chatRoomName,
      users: selectedUsers.map((user: UserI) => user.id),
    };

    createChatRoom(newChatRoom);
    onClick && onClick(e);
  };

  return (
    <Modal
      onClick={onClick}
      children={
        <ModalContainer.middle>
          {chatRoomNameInput}
          <SelectProfile onChange={handleSelectUser}>
            <option selected>대화 상대 추가</option>
            {allUsers?.map((user: UserI) => {
              if (user.id === currentUser.id || selectedUsers.includes(user))
                return;
              return <option id={String(user.id)}>{user.name}</option>;
            })}
          </SelectProfile>
          추가된 대화 상대
          <SelectedUserSection>
            {selectedUsers.map((user: UserI) => (
              <SelectedUserItem>{user.name}</SelectedUserItem>
            ))}
          </SelectedUserSection>
          <Button onClick={handleCreateChatRoom} className="close-modal">
            채팅방 개설
          </Button>
        </ModalContainer.middle>
      }
    />
  );
};

const SelectedUserSection = styled.section`
  all: unset;
  display: flex;
  flex-direction: column;

  height: 100px;

  overflow-y: auto;
`;

const SelectedUserItem = styled.div`
  all: unset;

  padding: 5px 0;
`;

const Button = styled.button`
  all: unset;

  border: 1px solid ${color.selectMenuGreen};
  border-radius: 30px;

  font-size: 15px;
  padding: 5px;

  ${hoverButtonAnimeGreen}
`;

export default CreateChatRoomModal;
