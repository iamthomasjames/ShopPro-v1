import React,{ useState,useEffect } from 'react'
import {Col,Row} from 'antd'
import './styles/header.scss'
import {
  ShoppingCartOutlined,
  UserOutlined 
} from '@ant-design/icons';
import { Button, Drawer } from 'antd';
const Header = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const showDrawer = () => {
    setOpen(true);
  };

  const handleWindowSizeChange=()=> {
    setWidth(window.innerWidth);
}

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

  return (
    <div className='header-container'>
      {
        width <= 768 ? (

          <Row className='header-mobile' align="middle">
               <Col  align="left"  span={8} offset={4}>Pro-Shop-V1</Col>
          <Col  align="left"  span={8} offset={4}>
          <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
          </Col>
          
      </Row>
        ):(
          <Row className='header' align="middle">
          <Col  align="left"  span={8} offset={4}>Pro-Shop-V1</Col>
          <Col align="right"  span={2} offset={4}><ShoppingCartOutlined/> Cart</Col>
          <Col  align="right" span={2} ><UserOutlined /> Sign In</Col>
      </Row>
        )
      }
     
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
    <Col align="right"  span={2} offset={4}>Cart</Col>
          <Col  align="right" span={2} > Sign In</Col>
      </Drawer>
  
    </div>
   
  )
}

export default Header;