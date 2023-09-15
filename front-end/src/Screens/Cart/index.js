import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../../slices/productsApiSlice';
import { addToCart } from '../../slices/cartSlice';
import { Rate, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Components/Card/card';

const Cart = () => {
  const { id: productId } = useParams();
  const { data, isLoading, error } = useGetProductDetailsQuery(productId);
  const { cartItems } = useSelector((state) => state.cart);
  const [qty, setQty] = useState("");
  const dispatch = useDispatch();
  const addtoCartHandler = async (e,id) => {
  

    const filteredItem= cartItems.filter((item)=> item._id === id);

    await dispatch(addToCart({ ...filteredItem[0], qty:e.target.value }))
  }

  return (
    <>
      <h1>Your Cart</h1>
      <Row align="top" gutter={16}>

        <Col span={10} >
          {
            cartItems.map((item) => {
              return (
                <Row gutter={[16,24]}>
                  <Col span={10}>
                    <img src={item.image} width="100%" height={"100px"} />
                  </Col>
                  <Col span={10} align={"middle"}>
                    <h3>{`${item.brand} ${item.name}`}</h3>
                    <p>{`Price: $ ${item.price}`}</p>
                    <label>Qty </label>
                    <Input type="text"  onChange={(e)=>addtoCartHandler(e,item._id)} value={item.qty} style={{ width: "20%" }} />
                  </Col>
                  <Col span={4}>
                    <Row style={{height:"100%"}} justify={"center"} align={"middle"}>
                      <Col>
                        <DeleteOutlined style={{ fontSize: '26px' }} />
                      </Col>

                    </Row>
                  </Col>
                </Row>

              )
            })
          }
        </Col>
        <Col span={8}>
        </Col>
        <Col span={6}>
          <p>price: ${data?.price} </p>
          <p>status: {data?.countinStock > 0 ? "In stock" : "Out of stock"} </p>
          Qty : <Input value={qty} onChange={(e) => setQty(e.target?.value)} style={{ width: "50px", marginRight: "10px" }} />
          <Button type="primary" onClick={addtoCartHandler} disabled={data?.countinStock <= 0}>Add to cart</Button>
        </Col>

      </Row>
    </>




  )
}
export default Cart;