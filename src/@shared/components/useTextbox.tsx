import React from 'react';
import styled from 'styled-components';

const DefaultTextbox = styled.span`
  all: unset;

  display: inline-block;
`;

export const Textbox = {
  small: styled(DefaultTextbox)``,
  middle: styled(DefaultTextbox)``,
  large: styled(DefaultTextbox)``,
};
