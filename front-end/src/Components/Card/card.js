
import {Row,Col} from 'antd'
import './style.scss'
import { Rate } from 'antd';
const Card =({image,price,brand,ratings,numReviews})=>{
    return(
        <Row className='product-container'>
             <Col span={24} className='height-100'>
                <img className='image-contain' src={image} height="100%" width="100%" />
             </Col>
             <Col span={24} className='product-title'>
               <h4>{brand}</h4>
               <Rate disabled defaultValue={ratings}/> {numReviews} reviews
               <h2>${price}</h2>
             </Col>
        </Row>
    )  
}
export default Card;