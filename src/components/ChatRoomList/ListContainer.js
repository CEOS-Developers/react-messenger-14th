import React from 'react';
import {
  Container,
  ListHeaderContainer,
  ListContentContainer,
  RowContainer,
  ColContainer,
  RecentMessageContainer,
} from './ListPresenter';
import { ProfileImage } from '../icons';

const ListContainer = ({ messengerData }) => {
  return (
    <Container>
      <ListHeaderContainer>
        <h4>n0wkim</h4>
      </ListHeaderContainer>
      <ListContentContainer>
        <ul>
          {messengerData.map((element) => {
            return (
              <RowContainer>
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
            );
          })}
        </ul>
      </ListContentContainer>
    </Container>
  );
};

export default ListContainer;
