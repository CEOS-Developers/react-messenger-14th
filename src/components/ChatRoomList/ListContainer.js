import React, { useState } from 'react';
import {
  Container,
  ListHeaderContainer,
  ListContentContainer,
  RowContainer,
  ColContainer,
  RecentMessageContainer,
} from './ListPresenter';
import { Link } from 'react-router-dom';
import { ProfileImage } from '../icons';
import ModalComponent from './Modal';

const ListContainer = ({ messengerData, room, toggleRoom }) => {
  const handleClick = () => {
    console.log('before : ');
    console.log(room);
    toggleRoom(!room);
  };

  return (
    <Container room={room}>
      <ListHeaderContainer>
        <RowContainer>
          <h4>n0wkim</h4>
          <ModalComponent messengerData={messengerData} />
        </RowContainer>
      </ListHeaderContainer>
      <ListContentContainer>
        <ul>
          {messengerData.map((element) => {
            return (
              <Link to={`/${element.id}`}>
                <RowContainer key={element.id} onClick={handleClick}>
                  <ProfileImage
                    alt="profile-img"
                    src={`img/${element.id}.png`}
                    width="56px"
                    height="56px"
                  />
                  <ColContainer>
                    <p>{element.name}</p>
                    <RecentMessageContainer>
                      {element.chatData.slice(-1)[0].text}
                    </RecentMessageContainer>
                  </ColContainer>
                </RowContainer>
              </Link>
            );
          })}
        </ul>
      </ListContentContainer>
    </Container>
  );
};

export default ListContainer;
