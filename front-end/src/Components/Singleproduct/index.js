import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../../slices/productsApiSlice';
import { Rate,Input,Button } from 'antd';
import './style.scss'
import Card from '../Card/card';

const SingleProduct = () => {
  const { id: productId } = useParams();
  console.log(productId)
  const { data, isLoading, error } = useGetProductDetailsQuery(productId);
  return (
    <Row align="top" gutter={16}>
      <Col span={10} >
        <img src={data?.image} width={"100%"} style={{borderRadius:"10px"}}/>
      </Col>
      <Col span={8}>
        <div>
          <h1>{data?.brand}</h1>
          <hr />
        </div>
        <div>
          <Rate disabled defaultValue={Math.ceil(data?.rating)} /> {data?.numReviews} reviews
          <hr />
        </div>
        <div>
          <p>{data?.description}</p>
        </div>



      </Col>
      <Col span={6}>
        <p>price: ${data?.price} </p>
        <p>status: {data?.countinStock>0?"In stock":"Out of stock"} </p>
        Qty : <Input style={{width:"50px",marginRight:"10px"}}/>
        <Button type="primary" disabled={data?.countinStock<=0}>Add to cart</Button>
      </Col>

    </Row>



  )
}
export default SingleProduct;