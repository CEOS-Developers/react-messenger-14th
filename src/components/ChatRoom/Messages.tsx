import dateToString from '../../utils/date';
import {
  Chat,
  Profile,
  Heart,
  ChatBubble,
  TextBox,
  TimeBox,
} from './MessengerPresenter';

interface ChatProps {
  date: number;
  text: string;
  userId: number;
  isHeart: boolean;
}

interface MessengerProps {
  id: number;
  recentChatSend: number;
  name: string;
  chatData: Array<ChatProps>;
}

interface Props {
  messengerData: MessengerProps;
}

export const Messages = ({ messengerData }: Props): JSX.Element => {
  // console.log('hi');
  return (
    <>
      {messengerData.chatData.map((element) => {
        return (
          <Chat isMe={element.userId} key={element.date}>
            <Profile
              id={element.userId}
              prop={element.userId}
              isTop={false}
              name={undefined}
            />
            {element.isHeart ? (
              <Heart />
            ) : (
              <ChatBubble>
                <TextBox>{element.text}</TextBox>
              </ChatBubble>
            )}
            <TimeBox>{dateToString(new Date(element.date))}</TimeBox>
          </Chat>
        );
      })}
    </>
  );
};
