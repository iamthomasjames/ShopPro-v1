import { Row, Col, Carousel } from 'antd'
import './style.scss'
import HomePage from '../../Screens/Home/homePage';
import Logo from '../../Assets/Images/proshop-logo.png';
import { Avatar, Badge, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import { DownOutlined, UserOutlined,LogoutOutlined } from '@ant-design/icons';
import { Button, message, Space, Tooltip } from 'antd';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../slices/cartSlice';
const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };
  const handleMenuClick = (e) => {
    if(e.key==="2")
    {
      logoutHandler();
    }
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items = [
    {
      label: 'Profile',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Logout',
      key: '2',
      icon:<LogoutOutlined />,
    }
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className='header'>
      <Row className='header-container' align={"middle"}>
        <Col flex={24} offset={1}>
          <Link to="/" className="my-link">
            <h1>ProShop</h1>
          </Link>

        </Col>
        <Col flex={1}>
        <Link to="/cart" className="my-link">
          <Badge count={cartItems.reduce((a, c) => a + Number(c.qty), 0)}>
            <Avatar shape="square" icon={<ShoppingCartOutlined />} />
          </Badge>
          </Link>
        </Col>

        <Col flex={2}>
          {userInfo ? (
            <>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                     {userInfo?.name}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </>
          ) : (
            <Link to="/login" className="my-link">
              Sign in
            </Link>
          )}
        </Col>


      </Row>
    </div>

  )
}

export default Header;