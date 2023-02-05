import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import Rating from "../../components/Rating";
import { addToCart } from "../cart/CartSlice";

const ProductDetail = ({ product }) => {
    const { image, name, price, description, stock } = product;
    const { productId } = useParams();
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
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
            <Link to='/' className='link'>&#60; Back To Result</Link>
            <div className='row mt-5'>
                <div className='col-5'>
                    <img className='large' src={image} alt={name} />
                </div>
                <div className='col'>
                    <h1>{name}</h1>
                    <Rating product={product} /> <br />
                    <h5>Price: ${price}</h5> <br /> <br />
                    <h5>Description: </h5>
                    <p>{description}</p>
                </div>
                <div className='col'>
                    <Card className='card' body outline color="secondary">
                        <CardBody>
                                <div className='row'>
                                    <div className='price'>${price}</div>
                                </div>
                                <div className='row'>
                                    <div>
                                        {stock > 0 ? (<span className='text-success'> In Stock</span>
                                        ) : (<span className='text-danger'> Unavailable</span>)
                                        }
                                    </div>
                                </div>
                            {
                                stock > 0 && (
                                    <>
                                        <div className='row'>
                                            <div>Qty : {' '}
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
                                        </div>
                                        <div className='row mt-4 mb-0'>
                                        <Button onClick={handleAddToCart} className='primary'>Add to Cart</Button>
                                        </div>
                                    </>
                                )
                            }
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;