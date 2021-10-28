import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ChatList = ({ userObj, profileImgList, profileNameList, uidList }) => {
  return (
    <div className="profileList">
      <FriendsProfile>
        <div>대화 목록</div>
        {profileImgList.map((profileURL, index) => {
          // 자신의 프로필을 제외하고 렌더링
          if (userObj.photoURL !== profileURL)
            return (
              <div key={index}>
                <FriendImg src={profileURL} />
                <div>{profileNameList[index]}</div>
                {/* 링크는 user의 uid - 상대방의 uid로 구성 */}
                <Link to={`/chat/${userObj.uid}-${uidList[index]}`}>
                  <Button>{profileNameList[index]}와 채팅 시작!</Button>
                </Link>
              </div>
            );
        })}
      </FriendsProfile>
    </div>
  );
};

const FriendsProfile = styled.div``;

const FriendImg = styled.img`
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
`;

const Button = styled.button``;

export default ChatList;
