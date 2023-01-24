import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import ProductCard from './ProductCard';
import { selectAllProducts } from './ProductsSlice';

const ProductsList = () => {
    const products = useSelector(selectAllProducts);
    // console.log(products);
    return (
        <div className='row justify-content-center'>
            {
                (products && products.length) &&
                products.map((product) => (
                    <div className='col-md-3'>
                        <ProductCard key={product.id} product={product} />
                        <br />
                    </div>
                ))
            }
        </div>
    );
}

export default ProductsList;