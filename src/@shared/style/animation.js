import styled, { keyframes } from 'styled-components';

export const POPUP_TIME = `0.5s`;

export const popup = keyframes`
    0% {
        transform: scale(0.95);
        opacity: 50%;
    }

    50% {
        transform: scale(1);
        opacity: 100%;
    }

    100% {
        transform: scale(1);
    }
`;

export const hoverButtonAnime = `
    transition: background 400ms;
    
    &:hover {
        background-color: rgba(226, 233, 242, 0.9);
        cursor: pointer;
    }
`;
