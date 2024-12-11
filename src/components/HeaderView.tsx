
import {  Layout} from 'antd';
import HeaderComponents from "./HeaderComponents";

const { Header  } = Layout;



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