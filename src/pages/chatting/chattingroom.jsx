import React from 'react';
import { useParams } from 'react-router-dom';

const Chattingroom = ({ hi }) => {
  const { id } = useParams();
  console.log(id);

  return <div>{id}번 방입니다.</div>;
};

export default Chattingroom;
