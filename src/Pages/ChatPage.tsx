import { useState, useRef } from "react";
import GlobalStyle from "../Asset/GlobalStyle";
import styled from "styled-components";

import Template from "../Components/Template";
import TopBar from "../Components/TopBar";
import ProfileBox from "../Components/ProfileBox";
import MessageBox from "../Components/MessageBox";
import Insert from "../Components/Insert";
import Menu from "../Components/Menu";

import useBool from "../Hooks/useBool";

const Wrapper = styled.div`
  display: flex;
`;

function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕 나는 어피치야", isMe: true },
    { id: 2, text: "안녕 나는 네오야", isMe: false },
    { id: 3, text: "만나서 반가워!", isMe: true },
  ]);

  //const [bool, SetBool] = useState<boolean>(true);
  const bools = useBool(false);

  const nextId = useRef<number>(4);

  // const onToggle = (): void => {
  //   SetBool(!bool);
  // };

  const onInsert = (text: string): void => {
    let message: { id: number; text: string; isMe: boolean };
    message = {
      id: nextId.current,
      text,
      isMe: bools.bool,
    };
    setMessages(messages.concat(message));
    nextId.current += 1;
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <Template>
        <TopBar />
        <ProfileBox
          messages={messages}
          onToggle={bools.onToggle}
          bool={bools.bool}
        />
        <MessageBox messages={messages} />
        <Insert onInsert={onInsert} />
      </Template>
    </Wrapper>
  );
}

export default ChatPage;
