import React, { useState} from 'react';
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { Button,  Space,  Typography, Flex } from 'antd';


export default function ContentPage() {
  const navigate = useNavigate();
  const { Title } = Typography;

  return(
    <div>
     
      <Title>This is a web project </Title>
      <Flex gap="middle" align='center'>
        <Space> </Space>
        <Space> 
          <Title level={2}>If you have an account - </Title>
          <Button onClick={()=>navigate('/auth/login')} type="link"  style={{color: "#ff78d4", textDecoration: 'none', fontSize: '26pt', fontWeight: 'bold'}} >Sign in</Button>
        </Space>
      </Flex>      
      <Flex gap="middle" align='center'>
        <Space> </Space>
        <Space align="baseline">
          <Title level={2}>If you don't - </Title>
          <Button onClick={()=>navigate('/auth/registration')} type="link" style={{color: "#ff78d4", textDecoration: 'none', fontSize: '26pt', fontWeight: 'bold'}} >Sign up</Button>
        </Space>
      </Flex>         
    </div>
  );
}