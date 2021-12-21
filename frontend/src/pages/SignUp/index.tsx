import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Background, Content } from './styles'

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="nome" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>

        </Form>
        <a href="criar">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>


    </Container>
  );
}

export default SignUp;