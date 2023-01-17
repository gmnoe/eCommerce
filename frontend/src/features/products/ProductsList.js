import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { selectAllProducts } from './ProductsSlice';

const ProductsList = () => {
    const products = useSelector(selectAllProducts);
    // console.log(products);
    return (
        <div className='row center'>
            {
                (products && products.length) &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductsList;