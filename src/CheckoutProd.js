import React from 'react'
import './CheckoutProd.css'
import { useStateValue } from './StateProvider';

function CheckoutProd({id, title, price,image,rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket=() => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutprod">
            <img className="checkoutProd__image" src={image} alt=""></img>
            <div className="checkoutProd__info">
                <p className="checkoutProd__title"> 
                    {title}
                </p>
                <p className="checkoutProd__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProd__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span>⭐</span>
                        ))
                    }
                </div>
                <button className="checkoutProd__button" onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProd
