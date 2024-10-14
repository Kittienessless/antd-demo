import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { ScriptReferenceHost } from "typescript";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input,  Typography, Space, Select, Flex, Layout} from 'antd';
import HeaderComponents from "./HeaderComponents";
import ContentPage from './ContentPage';
const { Title } = Typography;
const { Option } = Select;
const { Header, Footer, Content } = Layout;



export default function HomePageView() {


  return(
        <Layout >
          <Header  style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',   
          textAlign: 'center',
          color: '#fff',
          height: 64,
          backgroundColor: "white",
          paddingInline: 48,
          lineHeight: '64px',
        
        }}>
            <HeaderComponents />
          </Header>
        </Layout>
  );
}