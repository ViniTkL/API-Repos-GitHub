import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.div`
  width: 100%;
  max-width: 585px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.white};

  &::placeholder{
    color: ${(props) => props.theme.colors.white};
  }
`;


export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.white};
  transition: background 320ms ;

  &:hover{
    background: ${(props) => props.theme.colors.container};
  }

`;

