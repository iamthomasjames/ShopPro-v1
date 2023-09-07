import {Row,Col} from 'antd'
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
const HomePage =()=>{
    const { pageNumber, keyword } = useParams();
    const { data, isLoading, error } = useGetProductsQuery({
        keyword,
        pageNumber,
      });
  return(
    <Row>
        <h1>Latest Products</h1>
{console.log(data)}
    </Row>
  )
}
export default HomePage;