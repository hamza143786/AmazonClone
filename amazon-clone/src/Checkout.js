import React from 'react';
import Subtotal from './Subtotal.js'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img
                    className='checkout-ad'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Consumables/SVD/Feb/1500X300-SVD-Feb.jpg' />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout-title'>
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                      <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      />  
                    ))}  
                </div>
            </div>

            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
