import React from 'react';
import styled from 'styled-components';
function SideBar() {
  return (
    <Wrapper>
      <div>친구목록</div>
      <div>채팅</div>
      <div>더보기</div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100px;
  height: 100vh;
  background: lightgray;
`;
export default SideBar;
