import ProductCard from './ProductCard';
import { selectAllProducts } from './ProductsSlice';

const ProductsList = () => {
    const products = selectAllProducts();
    return (
        <div className='row center'>
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductsList;