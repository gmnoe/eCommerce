import { useParams, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../features/cart/CartDetail";

const CartPage = () => {
    return (
        <Container>
            <CartDetail />
        </Container>
    );
}

export default CartPage;