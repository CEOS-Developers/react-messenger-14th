import styled from 'styled-components';

export const ProfileImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 10px;
`;

// props 없을 때 default 설정
export const Button = styled.div`
  padding-right: 10px;
  padding-left: ${(props) => (props ? props.paddingLeft : 10)};
`;

export const HeartImg = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 10px;
`;

export const EmojiIcon = () => {
  return (
    <Button paddingLeft="20px">
      <img className="icon" src="img/emoji.png" width="24px" alt="emoji" />
    </Button>
  );
};
export const GalleryIcon = () => {
  return (
    <Button>
      <img
        className="icon"
        src="img/gallery.png"
        width="24px"
        alt="galleryIcon"
      />
    </Button>
  );
};

export const HeartIcon = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img className="icon" src="img/heart.png" width="24px" alt="emoji" />
    </Button>
  );
};
