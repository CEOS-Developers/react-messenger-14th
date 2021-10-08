import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  height: 54px;
  background-color: white;

  // mobile version
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const IconContainer = styled.div`
  margin-right: 10px;
  .icon {
    margin-right: 24px;
  }
`;

export const Form = styled.form`
  width: 218px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextInput = styled.input`
  flex: 1;
  padding: 0.2rem;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 3px;
  text-align: center;
  font-size: small;
`;
