
import {Row,Col} from 'antd'
import './style.scss'
const Card =({image,price,brand,ratings})=>{
    return(
        <Row className='product-container'>
             <Col span={24} className='height-100'>
                <img className='image-contain' src={image} height="100%" width="100%" />
             </Col>
             <Col span={24}>
               <h2 >{brand}</h2>
             </Col>
        </Row>
    )  
}
export default Card;