import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
}

/* body {
  width: 100vw;
  height: 100vh;

  
  display: flex;
  justify-content: center;
} */

input,
button,
ul,
p {
  all: unset;
}
/* 
span {
  flex-grow: 1;
} */

`;

export default GlobalStyle;
