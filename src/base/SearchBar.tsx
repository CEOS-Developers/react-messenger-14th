import React, { useState } from 'react';
import styled from 'styled-components';

type SearchbarProps = {
  searchQuery: string;
  onSearchQueryInput: (e: any) => void;
  onResetButtonClick: () => void;
};

type ComponentProps = {
  searchText: string;
};

const WithSearchBar = (WrappedComponent: React.FC<SearchbarProps>) => {
  const Component = ({ searchText }: ComponentProps) => {
    const [searchQuery, setSearchQuery] = useState<string>(searchText);

    const handleSearchQueryChange = (e: any) => {
      setSearchQuery(e.target.value);
    };

    const handleSearchQueryReset = () => {
      setSearchQuery('');
    };

    return (
      <WrappedComponent
        searchQuery={searchQuery}
        onSearchQueryInput={handleSearchQueryChange}
        onResetButtonClick={handleSearchQueryReset}
      />
    );
  };

  return Component;
};

const SearchBar: React.FC<SearchbarProps> = ({
  searchQuery,
  onSearchQueryInput,
  onResetButtonClick,
}) => {
  return (
    <StyledInputContainer>
      <StyledInputBox
        placeholder="검색하기"
        onChange={onSearchQueryInput}
        value={searchQuery}
      />
      <InputBoxClear onClick={onResetButtonClick}>✕</InputBoxClear>
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

export default WithSearchBar(SearchBar);
