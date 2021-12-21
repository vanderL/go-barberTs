import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Background, Content } from './styles'

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="nome" type="text" icon={FiUser} placeholder="Nome" />
        <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />
        <Button type="submit">Cadastrar</Button>

      </form>
      <a href="criar">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>


  </Container>
);

export default SignUp;