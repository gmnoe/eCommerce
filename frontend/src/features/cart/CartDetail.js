import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import { incrementQty, decrementQty, emptyCart, selectAllCart, removeItem } from "./CartSlice";


const CartDetail = () => {
    const navigate = useNavigate();
    const cart = useSelector(selectAllCart);
    const dispatch = useDispatch();
    const increaseQtyHandler = (id) => {
        dispatch(incrementQty(id));
    }
    const decreaseQtyHandler = (id) => {
        dispatch(decrementQty(id));
    }
    const handleEmptyCart = () => {
        dispatch(emptyCart());
      };
    const removeFromCartHandler = (id) => {
        dispatch(removeItem(id));
    }
    const checkoutHandler = () => {
        navigate('signin?redirect=shipping');
    }
    console.log(cart);

    return (
        <div className='container'>
                    <h1>Shopping Cart</h1>
                    {cart.length === 0 ? 
                        <div className='row'>
                            Cart is empty. <Link to='/products'>Go Shopping</Link>
                        </div>
                        :
                        (
                            <div>
                                {
                                    cart.map((item) => (
                                        <div key={item.id} className='row'>
                                                <div className='col'>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className='small'
                                                    ></img>
                                                </div>
                                                <div className='col min-30'>
                                                    <Link to={`/products/${item.id}`}>
                                                        {item.name}
                                                    </Link>
                                                </div>
                                                <Col>
                                                    <Button onClick={() => decreaseQtyHandler(item)}>
                                                        <span>-</span>
                                                    </Button>
                                                        {item.qty}
                                                    <Button onClick={() => increaseQtyHandler(item)}>
                                                        +
                                                    </Button>
                                                </Col>
                                                <Col>${item.price}</Col>
                                                <Col>
                                                    <Button type='button' onClick={() => removeFromCartHandler(item)}>
                                                        Delete
                                                    </Button>
                                                </Col>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                <Col>
                    <Card>
                        <CardBody>
                                    <h2>
                                        Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items) : $
                                        {cart.reduce((a, c) => a + c.price * c.qty, 0)}
                                    </h2>
                                    <Button 
                                        type='button' 
                                        onClick={checkoutHandler} 
                                        className='primary-block' 
                                        disabled={cart.length === 0}
                                    >
                                        Proceed to Checkout
                                    </Button>
                        </CardBody>
                    </Card>
                </Col>
                <div>
                    <Button type='button' onClick={() => handleEmptyCart()}>
                        Empty Cart
                    </Button>
                </div>
        </div>
    );
}

export default CartDetail;