import styled from 'styled-components';
import user from '../data/user'

interface ChatProps{
  chatList: any;
}

function Chatcontent({chatList}: ChatProps) {
  return (
    <>
      {chatList.map((message:any, i:never) => (
  
        <MessageContainer>
          <Img
            src={
              process.env.PUBLIC_URL + '/assets/' + user[message.user].profileImg
            }
          ></Img>
          <MessageContent key={i}>{message.text}</MessageContent>
        </MessageContainer>
      ))}
    </>
  );
}
const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
`;

const Img = styled.img`
  width: 80px;
  height: fit-content;
  border-radius: 30%;

`;

export default Chatcontent;