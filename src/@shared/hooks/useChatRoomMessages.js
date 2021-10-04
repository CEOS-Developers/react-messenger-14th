import useChatRoomMessagesAtom, {
  chatRoomMessagesAtom,
} from '../atoms/chatRoomMessages.atom';

const useChatRoomMessages = () => {
  const [messages, setMessages] = useChatRoomMessagesAtom(chatRoomMessagesAtom);

  const handlePostMessage = (nextState) => {
    setMessages(nextState);
  };

  return { messages, handlePostMessage };
};

export default useChatRoomMessages;
