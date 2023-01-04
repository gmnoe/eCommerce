import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import ProductDetail from "../features/products/ProductDetail";

const ProductDetailPage = () => {
    const { productId } = useParams();
    return (
        <Container>
            <ProductDetail product={product} productId={productId} />
        </Container>
    );
}

export default ProductDetailPage;