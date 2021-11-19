import styled from "styled-components";
import palette from "../styles/palette";
import MessageItem from "./MessageItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  background-color: ${palette.blue};
  height: 70vh;
  margin-top: 6rem;
  padding-bottom: 4rem;
  overflow-y: scroll;
`;

type MessageBoxProps = {
  messages: { id: number; text: string; isMe: boolean }[];
};

function MessageBox({ messages }: MessageBoxProps) {
  return (
    <Wrapper>
      {messages.map((message) => (
        <MessageItem message={message} key={message.id} />
      ))}
    </Wrapper>
  );
}

export default MessageBox;
