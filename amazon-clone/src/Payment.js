import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasktetTotal } from './reducer';
import axios from './axios'; 

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();   

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe which allows us to charge the customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total amount in a currencies subunits
                url: `payment/create?total=${getBasktetTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('The secret is >>>', clientSecret)

    const handleSubmit = async (event) => {
        // do all fancy stripe stuff....
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(function ({ paymentIntent }) {
                //payment intent = payment confirmation
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replace('/orders');

            })

    }

    const handleChange = event => {
        // Listen for changes in CardElement
        // and display any errors as the customer types their card info
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>
                    Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>




                {/* Payment Section - delivery address */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>120/14 Bangalpura</p>
                        <p>Bhiwandi, MH</p>
                    </div>
                </div>

                {/* Payment Section - Review items */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review Item and Delivery</h3>
                    </div>
                    <div className='payment-items'>
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

                {/* Payment Section - Payment method */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'>
                        {/* Stripe magic will  go */}

                        <form on onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment-priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasktetTotal(basket)}
                                    displayType={'text'}
                                    thousandSeperator={true}
                                    prefix={'₹'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* ERROR  */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment