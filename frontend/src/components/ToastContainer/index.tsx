import React from "react";
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from "../../hooks/toast";
import { Container } from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateY(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateY(360deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateY(0deg)' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          message={item}
          style={props}
        >
        </Toast>

      ))}

    </Container>
  )
};

export default ToastContainer;