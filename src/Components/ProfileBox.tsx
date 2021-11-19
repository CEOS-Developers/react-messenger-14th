import ProfileItem from "./ProfileItem";

type ProfileBoxProps = {
  messages: { id: number; text: string; isMe: boolean }[];
  onToggle: () => void;
  bool: boolean;
};

function ProfileBox({ messages, onToggle, bool }: ProfileBoxProps) {
  return (
    <>
      {messages.map((message) => (
        <ProfileItem
          key={message.id}
          message={message}
          onToggle={onToggle}
          bool={bool}
        />
      ))}
    </>
  );
}

export default ProfileBox;
