import styled from 'styled-components';

export const ProfileImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 10px;
`;

// props 없을 때 default 설정
export const Button = styled.div`
  padding-right: 10px;
  padding-left: ${(props) => (props ? props.paddingLeft : 10)};
`;
