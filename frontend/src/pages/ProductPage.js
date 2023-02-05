import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import Error from '../components/Error';
import ProductCarousel from '../components/ProductCarousel';
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
            <br />
            <Row className='text-center' id='carousel'>
                <ProductCarousel />
            </Row>
            <br />
            <ProductsList />
        </Container>
    )
};

export default ProductPage;