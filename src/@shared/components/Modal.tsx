import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const DefaultModal = styled.div`
  all: unset;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
`;

export const ModalContainer = {
  small: styled(DefaultModal)`
    width: 200px;
    height: 150px;
  `,
  middle: styled(DefaultModal)`
    width: 300px;
    height: 250px;
  `,
  large: styled(DefaultModal)`
    width: 400px;
    height: 350px;
  `,
};

export const Dimmer = styled.div`
  all: unset;
  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface ModalI extends React.HTMLAttributes<HTMLElement> {}

const target = document.querySelector('#root');

export const Modal = ({ children, onClick, ...props }: ModalI) => {
  const ref = useRef(document.createElement('div'));

  useEffect(() => {
    target!.appendChild(ref.current);

    return () => {
      target!.removeChild(ref.current);
    };
  }, []);

  return createPortal(
    <Dimmer className="close-modal">{children}</Dimmer>,
    ref.current
  );
};
