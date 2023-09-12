import { Row, Col, Carousel } from 'antd'
import './style.scss'
import HomePage from '../Home/homePage';
import Logo from '../../Assets/Images/proshop-logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className='header'>
      <Row className='header-container' align={"middle"}>
        <Col flex={10} offset={1}>
       <Link to="/">
        <h1>ProShop</h1> 
        </Link>
      
        </Col>
        <Col flex={1}>Products</Col>
        <Col flex={1}>Cart</Col>
        <Col flex={1}>profile</Col>
      </Row>
    </div>

  )
}

export default Header;