import { Button, Col, Row } from 'antd'
import React from 'react'

const Product = () => {
  return (
    <div className='product-page'>
        
        <Button>Back</Button>
      
        
        <Row justify={"center"}>
           
            <Col className='space-10'>
            <img src="https://fastly.picsum.photos/id/388/200/200.jpg?hmac=yc4V5jCOMR-l634JzXmANfvSGFGgYWHQN4aKA69RvZo" />
            </Col>
            <Col  className='space-10'>
                  <h1>I phone 13 pro plus</h1>
                  <p>Ratings</p>
                  <p>Price: 1000</p>
                  <p>Discription: temp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temp</p>

            </Col>
            <Row  align={"middle"} className='card'>
            <Col  className='space-10' >
            <p>Price: 1000</p>
            <hr/>
            <p>Status: In stock</p>
            <hr/>
            <Button >Add to cart</Button>

            </Col>
            </Row>
          

        </Row>
    </div>
  )
}

export default Product