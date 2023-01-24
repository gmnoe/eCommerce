import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../features/cart/CartDetail";
import { selectAllProducts, selectProductById } from "../features/products/ProductsSlice";


const CartPage = () => {
    const product = useSelector(selectAllProducts)

    return (
        <Container>
            <CartDetail product={product}/>
        </Container>
    );
}

export default CartPage;