import React,{ useState} from 'react';
import { Typography } from 'antd';

import { Button, Checkbox, Form, Input, Flex, Descriptions  } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];
const { Title } = Typography;
const ProfileComponent: React.FC = () => {

  return (
   <div>
     <Title style={{
       marginLeft: '100px',
       marginTop: '50px'
        
        }}>Profile</Title>
     <Descriptions title="User Info" items={items} style={{
       margin: '100px'
        
        }}></Descriptions>
   </div>
  );
};

export default ProfileComponent;