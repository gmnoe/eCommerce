import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody } from 'reactstrap'
import { incrementQty, decrementQty, emptyCart, selectAllCart, removeItem } from "./CartSlice";


const CartDetail = ({ product }) => {
    const { stock } = product;
    const { productId } = useParams();
    const { search } = useLocation();
    const navigate = useNavigate();
    const qty = search ? Number(search.split("=")[1]) : 1;
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
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? 
                    <div>
                        Cart is empty. <Link to='/products'>Go Shopping</Link>
                    </div>
                    :
                    (
                        <ul>
                            {
                                cart.map((item) => (
                                    <li key={item.id}>
                                        <div className='row'>
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className='small'
                                                ></img>
                                            </div>
                                            <div className='min-30'>
                                                <Link to={`/products/${item.id}`}>
                                                    {item.name}
                                                </Link>
                                            </div>
                                            <div>
                                                <Button onClick={() => decreaseQtyHandler(item)}>
                                                    -
                                                </Button>
                                                {item.qty}
                                                <Button onClick={() => increaseQtyHandler(item)}>
                                                    +
                                                </Button>
                                            </div>
											<div>${item.price}</div>
											<div>
												<Button type='button' onClick={() => removeFromCartHandler(item)}>
													Delete
												</Button>
											</div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
            <div className='col-1'>
                <Card>
                    <CardBody>
                        <ul>
                            <li>
                                <h2>
                                    Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items) : $
                                    {cart.reduce((a, c) => a + c.price * c.qty, 0)}
                                </h2>
                            </li>
                            <li>
                                <Button 
                                    type='button' 
                                    onClick={checkoutHandler} 
                                    className='primary-block' 
                                    disabled={cart.length === 0}
                                >
                                    Proceed to Checkout
                                </Button>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
            <div>
                <Button type='button' onClick={() => handleEmptyCart()}>
                    Empty Cart
                </Button>
            </div>
        </div>

    );
}

export default CartDetail;