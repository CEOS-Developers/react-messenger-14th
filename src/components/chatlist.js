import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chatListData from '../data/chatdata.json';

export default class ChatList extends React.Component {

    render(){
        const printChatting = (chats) => {
            chats = chats.filter((chat) => {
                return chat.name.indexOf(this.state.searchFriendName) > -1;
            });
            return chats.map((chat) => {
                return (
                    <Link to={{
                        pathname: `/chatting/${chat.id}`,
                        state: {
                            id : chat.id
                        },
                        }}
                    >
                        <Chat>
                            <SenderImg src={chat.image} alt={chat.name}></SenderImg>
                            <ChatDesc>
                                    <SenderName>{chat.name}</SenderName>
                                    <LastMsg>{chat.lastMsg}</LastMsg>
                            </ChatDesc>
                        </Chat>
                    </Link>
                )
            })
        }
        return(
            <Wrapper>
                <Title>채팅</Title>
                {printChatting(this.state.chatList.chatList)}
            </Wrapper>
        );
    }
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    padding: 30px;
    margin: 0;
`;
const Chat = styled.div`
    width: 95%;
    display: flex;
    margin: 20px 0 20px 40px;
    padding-bottom: 10px;
`;
const SenderImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    border-radius: 20px;
`;
const ChatDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
const SenderName = styled.div`
    font-weight: bold;
`;
const LastMsg = styled.div`
    margin-top: 5px;
    color: grey;
    font-size: 12px;
`;