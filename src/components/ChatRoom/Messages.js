import dateToString from '../../utils/date';
import {
  Chat,
  Profile,
  Heart,
  ChatBubble,
  TextBox,
  TimeBox,
} from './MessengerPresenter';

export const Messages = ({ messengerData }) => {
  return messengerData.chatData.map((element) => {
    return (
      <Chat isMe={element.userId} key={element.date}>
        <Profile id={element.userId} prop={element.userId} isTop={false} />
        {element.isHeart ? (
          <Heart />
        ) : (
          <ChatBubble>
            <TextBox>{element.text}</TextBox>
          </ChatBubble>
        )}
        <TimeBox>{dateToString(element.date)}</TimeBox>
      </Chat>
    );
  });
};
