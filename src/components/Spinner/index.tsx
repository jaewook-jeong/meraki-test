import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const circleLoader = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  &,
  &:before,
  &:after {
    box-sizing: border-box;
    flex-grow: 0;
    flex-shrink: 0;
  }
  width: 100%;
  transform-origin: center center;
  border: 4px solid var(--white-60);
  border-right-color: var(--black-80);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${circleLoader} 0.8s infinite ease-out;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;

export default Spinner;
