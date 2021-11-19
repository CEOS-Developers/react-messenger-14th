import React from 'react';
import styled from 'styled-components';
import user from '../data/user';
function ToggleProfile({ currentUser, setCurrentUser, userId }) {
  const handleChangeUser = () => {
    currentUser ? setCurrentUser(0) : setCurrentUser(userId.id);
  };
}