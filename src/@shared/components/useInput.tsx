import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';

interface InputI extends React.HTMLAttributes<HTMLElement> {}

const useInput = ({ placeholder, style, ...props }: InputI) => {
  const [value, setValue] = useState();

  const handleChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const input = (
    <Input
      placeholder={placeholder}
      style={style}
      onChange={handleChangeInput}
    />
  );

  return [value, input];
};

const Input = styled.input`
  all: unset;

  width: 80%;
  height: 20%;

  border: 1px solid ${color.selectMenuGreen};
  border-radius: 10px;
`;

export default useInput;
