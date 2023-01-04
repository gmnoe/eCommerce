import Rating from "./Rating";

const Product = (props) => {
    const { product } = props;
    return (
        <div key={product.id} className="card">
            <a href={`/product/${product.id}`}>
                {/* image size: 680px by 830px */}
                <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
                <a href={`/product/${product.id}`}>
                    <h2>{product.name}</h2>
                </a>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <div className="price">
                    ${product.price}
                </div>
            </div>
        </div>
    );
}

export default Product;