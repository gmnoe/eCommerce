import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Button } from 'reactstrap'
import { emptyCart } from "./CartSlice";


const CartDetail = () => {
    const { productId } = useParams();
    const { search } = useLocation();
    const qty = search ? Number(search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const handleEmptyCart = () => {
        dispatch(emptyCart());
      };

    return (
        <div className="text-center">
            <h1>Cart Page</h1>
            <p>Add To Cart : ProductId: {productId} Qty: {qty}</p>
            <Button onClick={handleEmptyCart}>Empty Cart</Button>
        </div>
    );
}

export default CartDetail;