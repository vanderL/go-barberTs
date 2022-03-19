import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4efe8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.5s;

      &:hover {
        color: ${shade(0.2, '#f4efe8')}
      }
    }
  }

  > a {
    color: #f4efe8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: all 0.5s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
        color: ${shade(0.3, '#f4efe8')}
      }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;