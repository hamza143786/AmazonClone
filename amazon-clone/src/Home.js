import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='' />

                <div className='home_row'>
                    <Product
                        title='The Lean Startup: How Constant Innovation Radically Successful Business Paperback'
                        price={500}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5} />

                    <Product
                        id="11"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook, 5 Litre Glass Bowl"
                        price={2500}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />

                </div>

                <div className='home_row'>
                    <Product
                        id="12"
                        title="Fitbit Watch LSXX9298"
                        price={2000}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                    <Product
                      id="13"
                      title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                      price={2572}
                      rating={5}
                      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />

                    <Product
                    id="14"
                     title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                     price={40999}
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
                </div>

                <div className='home_row'>
                    <Product
                    id="15"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={50094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home
