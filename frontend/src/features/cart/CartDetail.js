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

    return (
        <div className='container'>
            <h1>Shopping Cart</h1> <br />
            {cart.length === 0 ? 
                <div className='row'>
                    <div className='col-4'>
                        Cart is empty. <Link className='link' to='/'>Go Shopping</Link>
                    </div>
                </div>
                :
                (
                    <>
                        {
                            cart.map((item) => (
                                <div key={item.id} className='row mb-3'>
                                    <div className='col'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='small'
                                        />
                                    </div>
                                    <div className='col mt-3'>
                                        <Link className='link' to={`/products/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <Col className='mt-3'>
                                        <Button className='increment' onClick={() => decreaseQtyHandler(item)}>
                                            -
                                        </Button>
                                            {' '}
                                            {item.qty}
                                            {' '}
                                        <Button className='increment' onClick={() => increaseQtyHandler(item)}>
                                            +
                                        </Button>
                                    </Col>
                                    <Col className='mt-3'>${item.price}</Col>
                                    <Col className='mt-3'>
                                        <Button type='button' className='primary' onClick={() => removeFromCartHandler(item)}>
                                            Delete
                                        </Button>
                                    </Col>
                                </div>
                            ))
                        }
                    </>
                )
            }
                <div className='row mt-5'>
                    <div className='col-6 ms-auto'>
                        <Card>
                            <CardBody>
                                <h2>
                                    Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items) : $
                                    {cart.reduce((a, c) => a + c.price * c.qty, 0)}
                                </h2>
                                <Button 
                                    type='button' 
                                    onClick={checkoutHandler} 
                                    className='primary' 
                                    disabled={cart.length === 0}
                                >
                                            Proceed to Checkout
                                        </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div>
                    <Button type='button' className='primary' onClick={() => handleEmptyCart()}>
                        Empty Cart
                    </Button>
                </div>
        </div>
    );
}

export default CartDetail;