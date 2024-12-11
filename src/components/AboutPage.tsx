
import {  Typography, Space, Select, Flex, Layout } from 'antd';

const { Title } = Typography;
const { Option } = Select;
const { Header, Footer, Content } = Layout;


const layoutStyle = {
  overflow: 'hidden',
};


export default function AboutPage() {

  return(
    <Flex  vertical  gap='small'  justify='center' align='center' >
      <Space  direction="horizontal" style={{width: '100%', justifyContent: 'center'}}  >
        <Title   > About project </Title>
      </Space>
      <Space  direction="horizontal" style={{justifyContent: 'center', margin: 50, padding:5, maxWidth: 1000}}  >
        <Title level={3}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum nobis consectetur reiciendis maxime corporis accusantium voluptatibus explicabo eaque numquam non voluptatum laboriosam laudantium, alias, commodi ratione! Maiores fugiat accusamus voluptatem sed numquam quae, est aliquid mollitia veritatis at aspernatur ex quibusdam, quasi temporibus iste, quos hic necessitatibus? Soluta accusantium recusandae neque hic deserunt debitis incidunt et illum ut quasi reiciendis explicabo, nulla placeat esse id! Ea accusamus vel quidem inventore animi alias voluptatibus officia doloremque veritatis aperiam! Iure corrupti quaerat expedita nesciunt officiis, cupiditate nostrum sapiente. Inventore amet dolore assumenda, aperiam maiores recusandae enim eveniet distinctio facilis omnis? </Title>
      </Space>
      <Space  direction="horizontal" style={{justifyContent: 'center', margin: 50, padding:5, maxWidth: 1000}}  >
        <Title level={3}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum nobis consectetur reiciendis maxime corporis accusantium voluptatibus explicabo eaque numquam non voluptatum laboriosam laudantium, alias, commodi ratione! Maiores fugiat accusamus voluptatem sed numquam quae, est aliquid mollitia veritatis at aspernatur ex quibusdam, quasi temporibus iste, quos hic necessitatibus? Soluta accusantium recusandae neque hic deserunt debitis incidunt et illum ut quasi reiciendis explicabo, nulla placeat esse id! Ea accusamus vel quidem inventore animi alias voluptatibus officia doloremque veritatis aperiam! Iure corrupti quaerat expedita nesciunt officiis, cupiditate nostrum sapiente. Inventore amet dolore assumenda, aperiam maiores recusandae enim eveniet distinctio facilis omnis? </Title>
      </Space>
      <Space  direction="horizontal" style={{justifyContent: 'center', margin: 50, padding:5, maxWidth: 1000}}  >
        <Title level={3}  >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam ullam dicta, pariatur ipsam nesciunt iste quidem, eveniet nam quaerat, nobis quos rem magni natus nemo. Tempore esse officia iste. Dolorem id sapiente dignissimos unde est libero animi numquam, voluptatem nemo laboriosam fugiat nulla commodi minima explicabo voluptas nesciunt nobis.</Title>
      </Space>
    </Flex>
  );
}