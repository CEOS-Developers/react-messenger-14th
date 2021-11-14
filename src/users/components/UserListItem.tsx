import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  ListItemContent,
  ListItemTitle,
  ListWrapper,
  ListItemWrapper,
} from '../../@shared/components/ListItem';
import { defaultProfileImg, UserI } from '../../@shared/contexts/user';

const UserListItem = ({ user }: { user: UserI }) => {
  return (
    <ListWrapper>
      <ListItemWrapper style={{ margin: '0' }}>
        <ListItemTitle>
          <Img src={defaultProfileImg} />
        </ListItemTitle>
        <ListItemTitle>{user.name}</ListItemTitle>
      </ListItemWrapper>
    </ListWrapper>
  );
};

const Img = styled.img`
  all: unset;

  width: 50px;
  height: 50px;

  border-radius: 30px;
`;

export default UserListItem;
