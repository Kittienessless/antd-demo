import React, { useState} from 'react';
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { AppstoreOutlined, HolderOutlined, HomeOutlined, MailOutlined, PlusCircleOutlined, ReadOutlined, MoonOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu , Flex} from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const headerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: '',
};
const items: MenuItem[] = [
  {
    label: 'Home',
    key: '/Home',
    icon: < HomeOutlined/>
  },
  {
    label: 'User Profile',
    key: '/Profile',
    icon: < UserOutlined/>
  },
  {
    label:'Posts',
    key: '/Posts',
    icon: < ReadOutlined/>
    
  },
  {
    label: 'Create posts',
    key: '/Authors',
    icon: <PlusCircleOutlined/>

  },
  {
    label: 'About',
    key: '/AboutPage',
    icon: <MoonOutlined />

  },
];

const HeaderComponents: React.FC = () => {
  const navigate = useNavigate();

  return( 
    <Flex >
      <Menu  style={headerStyle} 
      onClick={({key})=>{
        navigate(key);
      }} 
      mode="horizontal" 
      items={items} />
    </Flex>

  );
};
export default HeaderComponents;