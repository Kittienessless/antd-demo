
import React,{ useState} from 'react';
import { Typography } from 'antd';
import PostCreationComponent from './PostCreationComponent'
import { Button, Checkbox, Form, Input, Flex } from 'antd';
const { Title } = Typography;
const PostsCreationPage: React.FC = () => {
  
  return (
   <Flex vertical style={{margin: '100px'}} gap="middle">
         <Title>Create your post</Title>
         <PostCreationComponent />
   </Flex>
  );
};

export default PostsCreationPage;