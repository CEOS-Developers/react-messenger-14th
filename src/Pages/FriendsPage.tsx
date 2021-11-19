import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import GlobalStyle from "../Asset/GlobalStyle";
import FriendsItem from "../Components/FriendsItem";
import TopBar from "../Components/TopBar";

import Menu from "../Components/Menu";
import Data from "../Data/friends.json";

import useBool from "../Hooks/useBool";

const Wrapper = styled.div`
  display: flex;
`;

const FriendsBox = styled.div`
  padding-left: 1rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  background-color: ${palette.yellow};
  padding: 0.6rem;
  border-radius: 10px;
  margin-right: 1rem;
  &:hover {
    background: ${palette.gold};
  }
`;

const Input = styled.input`
  width: 90%;
  border-color: none;
  outline: none;
  height: 2rem;
  margin: 1rem 0rem 2rem 2rem;
`;

const FriendsPage = () => {
  const bools = useBool(false);
  const [searchFriends, setSearchFriends] = useState<string>("");

  function FindFriends() {
    let data = Data.friends.filter(
      (data) => data.name.indexOf(searchFriends) > -1
    );
    let friendsList: {
      id: number;
      photo: string;
      name: string;
      profileText: string;
    }[] = [];
    data.map((friend, i) => friendsList.push(data[i]));

    return friendsList.map((friend) => (
      <FriendsItem
        key={friend.id}
        name={friend.name}
        photo={friend.photo}
        text={friend.profileText}
      />
    ));
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <FriendsBox>
        <TopBar />
        <Row>
          <h2>친구목록</h2>
          <Button onClick={bools.onToggle}>친구 검색</Button>
        </Row>
        {bools.bool ? (
          <Input
            style={{ display: "block" }}
            type="text"
            onChange={(e) => {
              setSearchFriends(e.target.value);
            }}
          />
        ) : (
          <Input style={{ display: "none" }} />
        )}
        {FindFriends()}
      </FriendsBox>
    </Wrapper>
  );
};

export default FriendsPage;
