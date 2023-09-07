import { Row, Col, Carousel } from 'antd'
import './style.css'
import HomePage from '../Home/homePage';
const Header = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Row className='header-container' align={"middle"}>
        <Col flex={5} offset={1}>Image</Col>
        <Col flex={1}>Products</Col>
        <Col flex={1}>Cart</Col>
        <Col flex={1}>profile</Col>
      </Row>
      <Row>
        <Col  offset={1}>
           <HomePage />
        </Col>
      
      </Row>
    </>

  )
}

export default Header;