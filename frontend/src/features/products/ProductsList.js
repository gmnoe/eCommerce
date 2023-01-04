import { PRODUCTS } from '../../app/shared/PRODUCTS';
import ProductCard from './ProductCard';

const ProductsList = () => {
    return (
        <div className='row center'>
            {
                PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductsList;