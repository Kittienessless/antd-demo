
import React,{ useState} from 'react';
import {useNavigate} from 'react-router-dom';

import { Typography } from 'antd';
import PostCreationComponent, { PostsData } from './PostCreationComponent'
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { API } from '../API/api';
const { Title } = Typography;
const PostsCreationPage: React.FC = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = (data: PostsData) => {
    // fetch
    const postsRequest = async () => {
      setResult("");
      setError("");
      try {
        await API.posts.createPost(data);
        setResult("Пост успешно создан!");
        setTimeout(() => {
          console.log('success')
          navigate('/ThankfulPage');

        }, 2000);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    postsRequest();
  };
  return (
   <Flex vertical style={{margin: '100px'}} gap="middle">
         <Title>Create your post</Title>
         <PostCreationComponent onSubmit={onSubmit} />
         {result && <>{result}</>}
         {error && <>{error}</>}
   </Flex>
  );
};

export default PostsCreationPage;