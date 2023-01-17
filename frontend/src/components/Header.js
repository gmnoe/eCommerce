import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCart } from "../features/cart/CartSlice";

const Header = () => {

    const cart = useSelector(selectAllCart);

    return (
        <header className="row">
            <div>
                <Link className="brand" to="/">eCommerce</Link>
                <Link to='/products'>Products</Link>
            </div>
            <div>
                <Link to="/cart">
                    Cart
                    {cart.length > 0 && (
                        <span className='badge'>{cart.length}</span>
                    )}
                </Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
    );
}

export default Header;