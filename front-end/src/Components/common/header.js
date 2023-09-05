import {Row,Col,Carousel } from 'antd'
import './style.css'
const Header = ()=>{
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return(
    <>
    <Row className='header-container' align={"middle"}>
        <Col flex={5} offset={1}>Image</Col>
        <Col flex={1}>Products</Col>
        <Col  flex={1}>Cart</Col>
        <Col  flex={1}>profile</Col>
    </Row>
    <Row>
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </Row>
    </>
    
  )
}

export default Header;