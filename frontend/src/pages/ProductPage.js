import { Container } from 'reactstrap';
import Product from '../components/Product';
import { PRODUCTS } from '../app/shared/PRODUCTS';

const ProductPage = () => {
    return (
        <Container>
            <div className='row center'>
                {
                PRODUCTS.map((product) => (
                    <Product key={product.id} product={product} />
                ))
                }
            </div>
        </Container>
    )
};

export default ProductPage;