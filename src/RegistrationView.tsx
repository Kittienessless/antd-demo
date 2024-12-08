import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import RegisterForm, { RegisterData } from "./components/RegisterForm";
import { API } from "./API/api";
import { Typography, Flex, Alert } from 'antd';
const { Title } = Typography;

const RegistrationView = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data: RegisterData) => {
    // fetch
    const registrationRequest = async () => {
      setResult("");
      setError("");
      try {
        await API.user.register(data);
        setResult("Пользователь успешно создан!");
        <Alert showIcon message="Success" type="success" closable={true}  />

        setTimeout(() => {
          console.log('success')
          navigate('/ThankfulPage');

        }, 2000);
      } catch (e) {
        <Alert showIcon closable={true} message="Error" type="error" />

        if (e instanceof Error) {
          
          setError(e.message);
        }
      }
    };
    registrationRequest();
  };

  return (
    <Flex  vertical align='center' justify='center' gap="middle">
      <Title>Registration</Title>
      <RegisterForm  onSubmit={onSubmit}/>
     
    </Flex>
  );
};

export default RegistrationView;