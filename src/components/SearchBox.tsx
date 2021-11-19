import React from 'react';
import styled from 'styled-components';
function SearchBox({
  searchClick,
  setSearchClick,
  handleInputChange,
}: {
  searchClick: any;
  setSearchClick: any;
  handleInputChange: any;
}) {
  const onExitButtonClicked = () => {
    setSearchClick(!searchClick);
  };
  return (
    <Wrapper>
      <Input onChange={handleInputChange} />
      <CloseButton onClick={onExitButtonClicked}>❌</CloseButton>
    </Wrapper>
  );
}
export default SearchBox;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
const Input = styled.input`
  border: 1px solid gray;
  border-radius: 20px;
  height: 30px;
  width: 80%;
`;
const CloseButton = styled.button`
  border: none;
  background: none;
`;
