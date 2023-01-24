import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import Rating from "../../components/Rating";

const ProductCard = ({ product }) => {
    const { id, name, image, price } = product;
    return (
        <Card>
            <Link to={`${id}`}>
                {/* image size: 680px by 830px */}
                <img className='medium' src={image} alt={name} />
            </Link>
            <CardBody>
                <Link to={`${id}`}>
                    <h2>{name}</h2>
                </Link>
                <Rating product={product} />
                <div className="price">
                    ${price}
                </div>
            </CardBody>
        </Card>
    );
}

export default ProductCard;