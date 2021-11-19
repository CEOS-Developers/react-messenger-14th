import React, { useState } from "react";
import emoji from "./happy.png";
import clip from "./clip.png";
import calendar from "./calendar.png";
import call from "./phone-call.png";
import videocall from "./video-calling.png";

import "./form.chatroom.scss";

function Buttons() {
  return (
    <div className="buttons">
      <img
        src={emoji}
        onClick={() => {
          alert("이모티콘 전송 기능은 아직 준비중입니다!");
        }}
        alt="emoji"
      />
      <img
        src={clip}
        onClick={() => {
          alert("파일 전송 기능은 아직 준비중입니다!");
        }}
        alt="clip"
      />
      <img
        src={calendar}
        onClick={() => {
          alert("달력 기능은 아직 준비중입니다!");
        }}
        alt="calendar"
      />
      <img
        src={call}
        className="right"
        onClick={() => {
          alert("통화 기능은 아직 준비중입니다!");
        }}
        alt="call"
      />
      <img
        src={videocall}
        onClick={() => {
          alert("영상통화 기능은 아직 준비중입니다!");
        }}
        alt="videocall"
      />
    </div>
  );
}

type FormProps = {
  id: number;
  userId: number;
  chats: any;
  setChats: Function;
};

function Form({ id, userId, chats, setChats }: FormProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //prevent reloading
    e.preventDefault();
    //no submission if empty
    if (!value) {
      window.alert("입력이 없습니다.");
      return;
    }
    let tempChats = [...chats];
    tempChats[id - 1].chats.push({
      id: userId,
      chat: value,
    });
    setChats(tempChats);

    //reset value
    setValue("");
  };

  return (
    <div className="ChatInput">
      <Buttons />
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
