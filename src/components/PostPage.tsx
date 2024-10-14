// страница постов, 
// вызов списка постов, 
// пагинация постов
// крутилки
import React,{ useState} from 'react';
import { Typography } from 'antd';

import { Button, Checkbox, Form, Input, Flex } from 'antd';
const { Title } = Typography;
const ProfileComponent: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const [editableStr, setEditableStr] = useState('User name');

  return (
   <div>
     <Title>Profile</Title>
     <Title editable={{ onChange: setEditableStr }}>{editableStr}</Title>

   </div>
  );
};

export default ProfileComponent;