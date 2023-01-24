import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/Rating";
import { addToCart } from "../cart/CartSlice";

const ProductDetail = ({ product }) => {
    const { image, name, price, description, stock } = product;
    const { productId } = useParams();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddToCart = (select) => {
        navigate(`/cart/${productId}?qty=${qty}`);
        const item = {
            id: parseInt(productId),
            qty: parseInt(qty),
            name: name,
            image: image,
            price: price,
            description: description,
            stock: stock
        };
        dispatch(addToCart(item));
      };

    return (
        <div className='container'>
            <Link to='/products'>Back To Result</Link>
            <div className='row'>
                <div className='col'>
                    <img className='large' src={image} alt={name} />
                </div>
                <div className='col'>
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
                <div className='col'>
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
                            {
                                stock > 0 && (
                                    <>
                                    <li>
                                        <div className='row'>
                                            <div>Qty :</div>
                                            <select 
                                                value={qty} 
                                                onChange={e => setQty(e.target.value)}
                                                >
                                                {
                                                    [...Array(stock).keys()].map(x => (
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={handleAddToCart} className='primary block'>Add to Cart</button>
                                    </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;