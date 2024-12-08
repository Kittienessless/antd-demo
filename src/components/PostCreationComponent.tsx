// форма создания постов - только форма
import React,{ useState} from 'react';
import {  Button, Form, Input  } from 'antd';

export type PostsData = {
  title: string;
  author: string;
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
      <Form.Item name='author' label="Author" rules={[{ required: true }]}>
        <Input value={author} onChange={e => setAuthor(e.target.value)} style={{
            fontSize: 25,
            height: 50,
           
          }}   />
      </Form.Item>
  
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

