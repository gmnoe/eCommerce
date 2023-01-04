import Rating from "../../components/Rating";

const ProductCard = ({ product }) => {
    const { id, name, image, numReviews, price } = product;
    return (
        <div key={id} className="card">
            <a href={`/product/${id}`}>
                {/* image size: 680px by 830px */}
                <img className="medium" src={image} alt={name} />
            </a>
            <div className="card-body">
                <a href={`/product/${id}`}>
                    <h2>{name}</h2>
                </a>
                <Rating product={product} numReviews={numReviews} />
                <div className="price">
                    ${price}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;