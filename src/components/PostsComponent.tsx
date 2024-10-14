import { useEffect, useState } from "react";
import { Card  } from 'antd';


export type PostsData = {
  title: string;
  author: string;
  post_body : string;
}
export default function PostsComponent() {
  const [posts, setPosts] = useState<PostsData[]>([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      
    } 
  },[])

  return(
    <div>

      <Card title="Post title" bordered={false} style={{ width: 900 }}>
        <p>Post author</p>
        <p>Post content</p>
      </Card>
    </div>
      
  );
}