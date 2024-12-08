// страница постов, 
// вызов списка постов, 
// пагинация постов
// крутилки
import React,{ useState} from 'react';
import { Typography } from 'antd';
import {useAsyncError, useNavigate} from 'react-router-dom';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { Button, Checkbox, Modal, Input, Flex, List, Card, Switch  } from 'antd';
import { title } from 'process';
import Item from 'antd/es/list/Item';
import ModalPostItem from './ModalPostItem';
const { Title } = Typography;
const ProfileComponent: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([
    {id: '1', title: '1111', author: '11111', text_body: '11111'},
    {id: '2', title: '22222', author: '22222', text_body: '22222'},
    {id: '2', title: '22222', author: '22222', text_body: '22222'},
    {id: '2', title: '22222', author: '22222', text_body: '22222'},
    {id: '2', title: '22222', author: '22222', text_body: '22222'},
    {id: '2', title: '22222', author: '22222', text_body: '22222'},

  ]);
  const [comment, setComment] = useState('');

  function LikeHelper() {
    
  }

  const actions: React.ReactNode[] = [
    <LikeOutlined key="like" onClick={()=>{ }}   />,
    <CommentOutlined  key="comment" onClick={() => setOpen(true)}  />,
  ];

 
  return (
  <div>
    <Title style={{
       marginLeft: '100px',
       marginTop: '50px',
       marginRight: '100px',
       
        }}>Posts</Title>
  <List  style={{
       marginLeft: '100px',
       marginTop: '50px',
       marginRight: '100px',
       justifyItems: 'center'
        }}
       dataSource={posts} 
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }} 
        renderItem={(posts) => (
          <List.Item>
            
              <Card style={{width: '800px'}}  
              hoverable  loading={loading} actions={actions}
              onClick={() => setOpen(true)}  key={posts.id}
              > 
              <Card.Meta
                title={posts.title}
                description={
                  <>
                    <p>{posts.author}</p>
                    <p>{posts.text_body}</p>
                  </>
                }
              /></Card>
           
           
              
          </List.Item>
        )}
        />
        <div>
        <Modal
                  title=" "
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={800}
                > 
                
                 
                </Modal>

        </div>
       
  </div>
   
);
}

export default ProfileComponent;
