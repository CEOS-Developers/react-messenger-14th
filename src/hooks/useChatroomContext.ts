import React, { useContext } from 'react';
import {
  chatroomList,
  ChatroomContext,
  chatroom,
  chatroomListReducer,
  chatroomReducer,
  ChatroomContextDispatch,
} from '../contexts/chatroomContext';

const useChatroomContext = () => {
  const chatroomList = useContext(ChatroomContext);
  const chatroomListDispatch = useContext(ChatroomContextDispatch);

  const getChatrooms = (): chatroomList => {
    return chatroomList;
  };
};
