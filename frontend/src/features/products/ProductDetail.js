import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

const ProductDetail = ({ product }) => {
    const { image, name, price, description, stock } = product;
    return (
        <div>
            <Link to='/product'>Back To Result</Link>
            <div className='row top'>
                <div className='col-2'>
                    <img className='large' src={image} alt={name} />
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{name}</h1>
                        </li>
                        <li>
                            <Rating product={product} />
                        </li>
                        <li>
                            Price: ${price}
                        </li>
                        <li>
                            Description: 
                            <p>{description}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                    <div className='price'>${price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                    <div>
                                        {stock > 0 ? (<span className='success'> In Stock</span>
                                        ) : (<span className='error'> Unavailable</span>)
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className='primary block'>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;