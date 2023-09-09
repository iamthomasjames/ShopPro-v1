import { Row, Col, Carousel } from 'antd'
import './style.scss'
import HomePage from '../Home/homePage';
import Logo from '../../Assets/Images/proshop-logo.png';
const Header = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className='header'>
      <Row className='header-container' align={"middle"}>
        <Col flex={5} offset={1}>
        <h1>ProShop</h1> 
        </Col>
        <Col flex={1}>Products</Col>
        <Col flex={1}>Cart</Col>
        <Col flex={1}>profile</Col>
      </Row>
      <Row>
        <Col span={24} className='padding-20'>
           <HomePage />
        </Col>
      
      </Row>
    </div>

  )
}

export default Header;