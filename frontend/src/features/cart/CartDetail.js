import { useParams, useLocation } from "react-router-dom";


const CartDetail = () => {
    const { productId } = useParams();
    const { search } = useLocation();
    const qty = search ? Number(search.split("=")[1]) : 1;

    return (
        <div className="text-center">
            <h1>Cart Page</h1>
            <p>Add To Cart : ProductId: {productId} Qty: {qty}</p>
        </div>
    );
}

export default CartDetail;