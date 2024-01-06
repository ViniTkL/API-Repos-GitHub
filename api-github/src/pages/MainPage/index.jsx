import React, { useState } from "react";
import { MdSearch } from 'react-icons/md';

import { Container, Title, Logo, Form, Input, Button } from "./styles";

import githubLogo from '../../Assets/Images/github-logo.svg'

export default function MainPage() {

  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="Logo do github" />
      <Title>API GitHub</Title>
      <Form>
        <Input placeholder = "Nome de usário..." value={login} onChange={(event) => setLogin(event.target.value)}/>
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color="#fff"/>
        </Button>
      </Form>
    </Container>
  );
}
