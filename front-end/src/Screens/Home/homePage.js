import { Row, Col } from 'antd'
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import './style.scss'
import Card from '../../Components/Card/card';
const HomePage = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  return (
    <>
      <Row>
        <Col span={24}>
          <h1 className='space-20'>Latest Products</h1>
          <hr className='space-20'/>
        </Col>

      </Row>
      <Row gutter={[16,16]}>

        {
          data?.map((product) => {
           const {_id,image,brand,rating,price,numReviews} = product;
            return (
             
              <Col xs={24} sm={12} lg={6} xl={4} >
                <Link to={`/product/${_id}`} >
                <Card image={image} brand={brand} ratings={rating} price={price} 
                numReviews={numReviews}/>
                </Link>
              </Col>

            )
          })
        }

      </Row>
    </>



  )
}
export default HomePage;