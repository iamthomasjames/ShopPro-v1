import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import './style.scss'
import Card from '../Card/card';
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
        </Col>

      </Row>
      <Row gutter={[16,16]}>

        {
          data?.map((product) => {
           const {image,brand,ratings,price} = product;
            return (
             
              <Col span={4} >
                <Card image={image} brand={brand} ratings={ratings} price={price} />
              </Col>

            )
          })
        }

      </Row>
    </>



  )
}
export default HomePage;