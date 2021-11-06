import dot from '../../static/images/dot.svg';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <AnimationWrapper1 {...scale}>
        <Img url={dot} />
      </AnimationWrapper1>

      <AnimationWrapper2 {...scale}>
        <Img url={dot} />
      </AnimationWrapper2>

      <AnimationWrapper3 {...scale}>
        <Img url={dot} />
      </AnimationWrapper3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.span`
  all: unset;
  width: 12px;
  height: 12px;
  -webkit-mask: url(${(props) => props.url}) no-repeat 50% 50%;
  background-color: white;
`;

const AnimationWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => scale} 0.5s infinite linear;
`;

const AnimationWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => scale} 0.5s infinite linear;
  animation-delay: 100ms;
`;

const AnimationWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => scale} 0.5s infinite linear;
  animation-delay: 200ms;
`;

const scale = keyframes`
  from {
    transform: scale(0.8)
  }

  to {
    transform: scale(1)
  }
`;

export default Loading;
