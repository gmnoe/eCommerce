
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import ProductDetail from "../features/products/ProductDetail";
import { selectProductById } from "../features/products/ProductsSlice";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));
    return (
        <Container>
            <ProductDetail product={product} />
        </Container>
    );
}

export default ProductDetailPage;