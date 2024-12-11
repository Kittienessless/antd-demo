
import {  Flex, Layout} from 'antd';
import ContentPage from './ContentPage';
const {  Content } = Layout;



const contentStyle: React.CSSProperties = {
  textAlign: 'left',
  marginLeft: 100, 
  paddingLeft: 10,
  marginTop: 40,
  minHeight: '70vh',
  lineHeight: '120px',
  color: '#fff',
};

const layoutStyle = {
  overflow: 'hidden',
};

export default function HomePageView() {


  return(
    <div>
    <Flex gap="middle" wrap >
        <Layout style={layoutStyle}>
          <Content style={contentStyle}>
            <ContentPage />
          </Content>
         
        </Layout>
    </Flex>
    </div>
  );
}