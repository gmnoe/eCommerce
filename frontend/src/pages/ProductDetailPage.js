
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import ProductDetail from "../features/products/ProductDetail";
import { selectProductById } from "../features/products/ProductsSlice";
import  Loading  from '../components/Loading';
import  Error  from '../components/Error';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));

    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Container>
            <ProductDetail product={product} />
        </Container>
    );
}

export default ProductDetailPage;