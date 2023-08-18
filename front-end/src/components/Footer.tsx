import React from 'react'
import {Row,Col} from 'antd'
import './styles/footer.scss'
const Footer = () => {
 const Year =  new Date().getFullYear();
  return (
    <Row className="footer-container" align="middle">
       
            <Col align="middle"  span={24}>Copyright @ {Year} - ProShop-v1</Col>
       
    </Row>
  )
}

export default Footer