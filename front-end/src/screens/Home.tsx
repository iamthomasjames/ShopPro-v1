import React from 'react'
import {Row} from 'antd'
import ProductCard from '../components/Card.tsx'
import {products} from '../dataTemplate/products.js'
const Home = () => {
  return (
   <div className='home-container'>
    <h1>Latest Products</h1>
   <Row justify="center" gutter={[8,16]}>
      {
       products.map((item:any)=>{
        return(
            <ProductCard name={item.name} id={item.product_id} rating={item.ratings} price={item.price}/>
        )
       })
      }
       
   </Row>
   </div>

  )
}

export default Home