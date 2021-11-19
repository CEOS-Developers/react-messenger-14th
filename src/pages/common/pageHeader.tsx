import { ChangeEventHandler, MouseEventHandler } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

export const PageHeader = (
  title: string,
  handleClickSearch: MouseEventHandler<HTMLElement>,
  handleChange: ChangeEventHandler<HTMLInputElement>,
  isSearching: boolean
) => {
  return (
    <>
      <Header>
        <PageTitle>{title}</PageTitle>
        <SearchButton onClick={handleClickSearch}>
          <BsSearch />
        </SearchButton>
      </Header>
      {isSearching && (
        <>
          <SearchBar
            onChange={handleChange}
            placeholder="검색어를 입력하세요."
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '검색어를 입력하세요.')}
          />
          <CloseButton onClick={handleClickSearch}>
            <GrClose />
          </CloseButton>
        </>
      )}
    </>
  );
};

const CloseButton = styled.section`
  display: inline;
  margin-left: 5px;
  height: 7vw;
`;

const Header = styled.section`
  display: flex;
  margin-top: 35px;
`;

const SearchButton = styled.section`
  margin-left: 15px;
  margin-top: 5px;
`;
const SearchBar = styled.input`
  margin-left: 20px;
  width: 60vw;
  height: 30px;
  border-radius: 3vw;
  border: 1px solid;
  padding-left: 15px;
`;

const PageTitle = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;
