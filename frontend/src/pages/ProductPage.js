import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ProductsList from '../features/products/ProductsList';

const ProductPage = () => {

    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Container>
            <ProductsList />
        </Container>
    )
};

export default ProductPage;