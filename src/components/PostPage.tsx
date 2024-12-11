 
import React,{ useState, useEffect} from 'react';
import { Typography } from 'antd';
  import {  List, Card   } from 'antd';
 import { API } from "../API/api";

const { Title } = Typography;
export type RegisterData = {
  title: string;
  author: string;
  text_body : string;
  
}
const PostPage: React.FC = () => {

  
  const [posts, setPosts] = useState([
    {id: '', title: '', author: '', text_body: ''},


  ]); 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await API.posts.getAllPosts()
       
        setPosts(response);
        setError('');
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);


 
 
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
              hoverable  
                key={posts.id}
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
         

        </div>
       
  </div>
   
);
}

export default PostPage;
