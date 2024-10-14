// форма создания постов - только форма
import React,{ useState} from 'react';
import { Typography, Button, Form, Input, InputNumber, Flex  } from 'antd';
const { Title } = Typography;


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values: any) => {
  console.log(values);
};

const PostCreationComponent: React.FC = () => {
 const [form] = Form.useForm();
  return (
   <div > 
      <Form 
      layout="vertical"      size="large" 
      style={{ maxWidth: 600 }}
    >
      <Form.Item  name='title' label="Title" rules={[{ required: true }]}>
        <Input style={{
            fontSize: 25,
            height: 50,
           
          }}  />
      </Form.Item>
      <Form.Item name='author' label="Author" rules={[{ required: true }]}>
        <Input style={{
            fontSize: 25,
            height: 50,
           
          }}   />
      </Form.Item>
  
      <Form.Item name='postBody' label="Post" rules={[{ required: true }]}>
        <Input.TextArea  style={{
            fontSize: 25,
            height: 50,
           
          }}  />
      </Form.Item>
      <Form.Item >
        <Button size='large'  type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>

   </div>
  );
};

export default PostCreationComponent;