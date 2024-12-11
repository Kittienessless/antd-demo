// форма создания постов - только форма
import React,{ useState, useEffect} from 'react';
import {  Button, Form, Input  } from 'antd';
import { API } from "../API/api";
import userEvent from '@testing-library/user-event';

export type PostsData = {
  title: string;
   text_body : string
}

type FormProps = {
  onSubmit: (data: PostsData) => void;
}


export default function PostCreationComponent({onSubmit}: FormProps) {
 const [form] = Form.useForm();
 const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text_body, setText] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
        
      try {
        
        const response = await API.user.getCurrentUser()
 
        setAuthor(response.name);
       } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } 
    };

    fetchUserData();
  }, []);
   return (
   <div > 
      <Form   form={form}   initialValues={{ remember: true }}
      onFinish={onSubmit}
      layout="vertical"      size="large" 
      style={{ maxWidth: 600 }}
    >
      <Form.Item  name='title' label="Title" rules={[{ required: true }]}>
        <Input value={title}  onChange={e => setTitle(e.target.value)}  style={{
            fontSize: 25,
            height: 50,
           
          }}  />
      </Form.Item>
    <p>Author: {author}</p>
  
      <Form.Item name='text_body' label="Post" rules={[{ required: true }]}>
        <Input.TextArea value={text_body} onChange={e => setText(e.target.value)} style={{
            fontSize: 25,
            height: 50,
           
          }}  />
      </Form.Item>
      <Form.Item>
        <Button size='large'  type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>

   </div>
  );
};

