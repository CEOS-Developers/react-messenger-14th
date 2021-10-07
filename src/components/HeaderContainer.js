import React, { useState } from 'react';
import {
  Form,
  TextInput,
  RowContainer,
  IconContainer,
} from './HeaderPresenter';

const HeaderContainer = () => {
  const [text, setText] = useState('');

  const handleSubmitButtonClick = () => {
    // 일단은 아무일도 안 일어나고 초기화만
    setText('');
    window.alert('미구현입니다~');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitButtonClick();
  };
  const onChange = (e) => {
    const nextForm = e.target.value;
    setText(nextForm);
  };

  return (
    <RowContainer>
      <img src="img/logo.png" width="103px" height="29px" alt="logo"></img>
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
        <img
          className="icon"
          src="img/plane.png"
          width="22px"
          alt="plane"
        ></img>
        <img
          className="icon"
          src="img/compass.png"
          width="22px"
          alt="compass"
        ></img>
        <img
          className="icon"
          src="img/heart.png"
          width="22px"
          alt="heart"
        ></img>
      </IconContainer>
    </RowContainer>
  );
};

export default HeaderContainer;
