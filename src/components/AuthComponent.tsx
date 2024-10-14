import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Typography, Flex } from 'antd';
import '../App.css';
import FromComponent, { LoginFormData } from "./FromComponent";
import { API } from "../API/api";
const { Title } = Typography;

const AuthComponent = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = (data: LoginFormData) => {
    // fetch
    const loginRequest = async () => {
      setResult("");
      setError("");
      try {
        await API.auth.login(data);
        setResult("вход выполнен");
        setTimeout(() => {
          console.log('success')
          navigate('/home');
        }, 1000);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    loginRequest();
  };

  return (
    <Flex vertical align='center' justify='center' gap="middle">
          <Title>Authorization</Title>
          <FromComponent onSubmit={onSubmit}></FromComponent>
          {result && <>{result}</>}
          {error && <>{error}</>}
    </Flex>

  );
};


export default AuthComponent;