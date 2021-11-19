import { useState } from 'react';
import {
  Form,
  TextInput,
  RowContainer,
  IconContainer,
} from './HeaderPresenter';
import { Link } from 'react-router-dom';
import { ProfileImage } from '../icons';

const HeaderContainer = (): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleSubmitButtonClick = () => {
    // 일단은 아무일도 안 일어나고 초기화만
    setText('');
    window.alert('집가고싶다 나 자고싶다 이제 그만하고싶어');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSubmitButtonClick();
  };
  const onChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <RowContainer>
      <Link to="/">
        <img src="img/logo.png" width="103px" height="29px" alt="logo"></img>
      </Link>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="검색"
          onChange={onChange}
          value={text}
        />
      </Form>
      <IconContainer>
        <img className="icon" src="img/home.png" width="22px" alt="home"></img>
        <Link to="/1">
          <img className="icon" src="img/plane.png" width="22px" alt="plane" />
        </Link>
        <img
          className="icon"
          src="img/compass.png"
          width="22px"
          alt="compass"
        />
        <img className="icon" src="img/heart.png" width="22px" alt="heart" />
        <Link to="settings">
          <ProfileImage
            alt="default profile image"
            src="img/noImg.png"
            width="22px"
            height="22px"
          />
        </Link>
      </IconContainer>
    </RowContainer>
  );
};

export default HeaderContainer;
