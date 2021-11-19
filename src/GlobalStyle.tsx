import { createGlobalStyle } from 'styled-components';
import COLORS from './constants/colors';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  background-color: ${COLORS.background};
}
a{
  text-decoration-line : none;
  color: black;
}
input,
button,
ul,
p {
  all: unset;
}

`;

export default GlobalStyle;
