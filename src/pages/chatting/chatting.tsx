import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ChattingListItem from './chattingListItem';
import { UsersContext } from '../../app';
import useCurrentUsers from '../../Hooks/useCurrentUsers';
import { PageHeader } from '../common/pageHeader';

const Chatting = () => {
  // context에서 데이터를 받아옴.
  const { state } = useContext(UsersContext);

  // custom Hooks
  const { currentUsers, handleClickSearch, handleChange, isSearching } =
    useCurrentUsers(state);

  return (
    <ChatContainer>
      {PageHeader('채팅', handleClickSearch, handleChange, isSearching)}
      {/* 채팅 목록에서는 시간 순서대로 정렬됨. */}
      <ChatList>
        {currentUsers &&
          [...currentUsers]
            .sort((a, b) => {
              return a.dialogue[a.dialogue.length - 1].time <
                b.dialogue[b.dialogue.length - 1].time
                ? 1
                : -1;
            })
            .map((element) => (
              <ChattingListItem
                key={element.id}
                user={element}
              ></ChattingListItem>
            ))}
      </ChatList>
    </ChatContainer>
  );
};

const ChatList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #ffffff;
`;

export default Chatting;
