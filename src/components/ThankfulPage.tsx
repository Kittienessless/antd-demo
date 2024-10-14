import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { ScriptReferenceHost } from "typescript";
import { ArrowRightOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input,  Typography, Space, Select, Flex, Layout} from 'antd';
import HeaderComponents from "./HeaderComponents";
import ContentPage from './ContentPage';
const { Title } = Typography;
const { Option } = Select;
const { Header, Footer, Content } = Layout;


const layoutStyle = {
  overflow: 'hidden',
};


export default function ThankfulPage() {
  const navigate = useNavigate();

  return(
    <Flex  vertical  gap='middle'  justify='center' align='center' >
    <Space  direction="horizontal" style={{width: '100%', justifyContent: 'center'}}  >
      <Title   >Thanks for your registration! </Title>
    </Space>
        
        <Space >
        <Button  icon={<ArrowRightOutlined />} size='large'    type="primary"   
          style={{
            fontSize: 20,
            height: 40,
            margin: 50,
          }}  iconPosition={'end'}
        onClick={()=>{
        navigate('/Profile');
      }} 
      >See profile</Button>
        </Space>
         <Space>
         <Button  icon={<ArrowRightOutlined />}  type="primary"  size='large'    
          style={{
            fontSize: 20,
            height: 40,
            margin: 50,
          }} iconPosition={'end'} onClick={()=>{
        navigate('/CreatePosts');
      }} >Create posts</Button> 
         </Space>
       <Space>
       <Button size='large'    icon={<ArrowRightOutlined />} 
          style={{
            fontSize: 20,
            height: 40,
            margin: 50,
          }}  type="primary" iconPosition={'end'}  onClick={()=>{
        navigate('/Posts');
      }} >Show content</Button> 
       </Space>

    </Flex>
  );
}