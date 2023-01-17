import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, Link } from "react-router-dom";
import { Alert, Button } from 'reactstrap'
import { addToCart, emptyCart, selectAllCart } from "./CartSlice";


const CartDetail = ({ product }) => {
    const { stock } = product;
    const { productId } = useParams();
    const { search } = useLocation();
    const qty = search ? Number(search.split("=")[1]) : 1;
    const cart = useSelector(selectAllCart);
    const dispatch = useDispatch();
    const handleEmptyCart = () => {
        dispatch(emptyCart());
      };
    const removeFromCartHandler = (id) => {
        // delete action
    }

    return (
        <div className='row top'>
            <div className='col-2'>
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? <Alert>
                    Cart is empty. <Link to='/'>Go to products page.</Link>
                </Alert> : 
                (
                    <ul>
                        {cart.map((item) => (
                                <li key={item.product}>
                                    <div className='row'>
                                        <div>
                                            <img 
                                                src={item.image}
                                                alt={item.name}
                                                className='small' 
                                            />
                                        </div>
                                        <div className='min-30'>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            <select 
                                                value={item.qty} 
                                                onChange={e => 
                                                    dispatch(
                                                        addToCart(item.product),
                                                        Number(e.target.value)
                                                    )
                                                }
                                            >
                                                {[...Array(stock).keys()].map(x => (
                                                        <option key={x+1} value={x+1}>
                                                            {x+1}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div>${item.price}</div>
                                        <div>
                                            <Button 
                                                type='button' 
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
            <Button onClick={handleEmptyCart}>Empty Cart</Button>
        </div>
    );
}

export default CartDetail;