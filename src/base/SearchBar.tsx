import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type SearchbarProps = {
  value: string;
  onSearchQueryChange: (e: any) => void;
};

const SearchBar: React.FC<SearchbarProps> = ({
  value,
  onSearchQueryChange,
}) => {
  const handleSearchQueryChange = (e: any) => {
    onSearchQueryChange(e.target.value);
  };

  const handleResetButtonClick = () => {
    onSearchQueryChange('');
  };

  return (
    <StyledInputContainer>
      <StyledInputBox
        placeholder="검색하기"
        onChange={handleSearchQueryChange}
        value={value}
      />
      <InputBoxClear onClick={handleResetButtonClick}>✕</InputBoxClear>
    </StyledInputContainer>
  );
};

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInputBox = styled.input`
  width: 85%;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  padding: 5px 10px;
  transition: all 0.25s ease-in;
  font-weight: lighter;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 100;
  }
`;

const InputBoxClear = styled.div`
  font-size: 11px;
  margin: auto;
  transition: font-size 0.1s ease-in-out;
  color: gray;

  &:hover {
    cursor: pointer;
    font-size: 15px;
  }
`;

export default SearchBar;
