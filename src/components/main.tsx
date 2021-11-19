import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import friendListData from '../data/userdata.json';

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            friendList : friendListData,
            searchFriendName : ''
        }
    }
    render(){
   
        const printFriends = (friends) => {
            friends = friends.filter((friend) => {
                return friend.name.indexOf(this.state.searchFriendName) > -1;
            });
            return friends.map((friend) => {
                return (
                    <Link to={{
                        pathname: `/chatting/${friend.id}`,
                        state: {
                            id : friend.id
                        },
                        }}
                    >
                        <Profile>
                            <ProfileImg src={friend.image} alt={friend.name}></ProfileImg>
                            <ProfileDesc>
                                    <ProfileName>{friend.name}</ProfileName>
                                    <ProfileState>{friend.state}</ProfileState>
                            </ProfileDesc>
                        </Profile>
                    </Link>
                )
            })
        }
        return(
                <Wrapper>
                    <Title>react 메신저</Title>
                
                    <MyProfile>
                        
                        <ProfileDesc>
                            <ProfileName>integer</ProfileName>
                            <ProfileState>테스트입니다.</ProfileState>
                        </ProfileDesc>
                    </MyProfile>
                    {printFriends(this.state.friendList.friendList)}
                </Wrapper>
            );
    }
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    padding: 50px;
    margin: 0;
`;
const Profile = styled.div`
    width: 95%;
    display: flex;
    margin: 20px 0 20px 40px;
    padding-bottom: 10px;
`;
const MyProfile = styled(Profile)`
    border-bottom: 1px solid rgba(92, 92, 92, 0.5); 
`;
const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    border-radius: 20px;
`;
const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
const ProfileName = styled.div`
    font-weight: bold;
`;
const ProfileState = styled.div`
    margin-top: 5px;
    color: grey;
    font-size: 12px;
`;