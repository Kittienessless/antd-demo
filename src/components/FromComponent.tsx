import React,  {FormEvent, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Space } from 'antd';

export type LoginFormData = {
  login: string;
  password: string;
}


type FormProps = {
  onSubmit: (data: LoginFormData) => void;
}

export default function  FromComponent ({onSubmit}: FormProps) {
  const [form] = Form.useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <Form   
      form={form} 
      name="login"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input 
          value={login} 
          onChange={e => setLogin(e.target.value)}   
          style={{
              fontSize: 20,
              height: 40,
            
            }}   
          prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input   
          style={{
            fontSize: 20,
            height: 40,
           
          }}  
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-evenly" align="center">
         
          <Space size="large">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox   style={{
            fontSize: 20,
           
          }} >Remember me</Checkbox>
              </Form.Item>
              <a href=""   style={{
            fontSize: 20,
            height: 40,
           
          }}>Forgot password</a>
          </Space>
            
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button size='large'   style={{
            fontSize: 20,
            height: 40,
           
          }}  block type="primary" htmlType="submit" >
          Log in
        </Button>
         <Button size='large'    style={{
            fontSize: 20,
            height: 40,
           
          }} type="link" onClick={()=>navigate('/auth/registration')}> or Register now!</Button>
      </Form.Item>
    </Form>
  );
};

