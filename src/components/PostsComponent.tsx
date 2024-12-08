import { useEffect, useState } from "react";
import { Card  } from 'antd';


export type PostData = {
  title: string;
  authors: string;
  post_body : string;
}
export default function PostsComponent() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [authors, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [post_body, setText] = useState("");

  
  return(
    <div>

      <Card title="title" bordered={false} style={{ width: 900 }}>
        <p>Post author</p>
        <p>Post content</p>
      </Card>
    </div>
      
  );
}