import React, { useState } from 'react';
import { FaUser, FaStar, FaPlus, FaMinus, FaBook } from 'react-icons/fa';
import './productbuy.css';

const Productbuycomponets = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    // Get today's date
    const today = new Date().toLocaleDateString();

    return (
        <div className='main-product-info-address'>
            <div className='product-image-a'></div>

            <div className='product-info-address'>
                <h1>
                    <FaUser style={{ marginRight: '5px' }} />
                    name
                </h1>
                <h1>
                    <FaBook style={{ marginRight: '5px' }} />
                    captions
                </h1>
                <h1>
                    price
                </h1>

                <div className='star-icons'>
                    {[...Array(4)].map((_, index) => (
                        <FaStar key={index} style={{ color: 'yellow' }} />
                    ))}
                </div>

                <div className='product-button-a'>
                    <button onClick={handleIncrease}>
                        <FaPlus />
                    </button>
                    <h1>{count}</h1>
                    <button onClick={handleDecrease}>
                        <FaMinus />
                    </button>
                </div>

                <div className='main-address-a'>
                    <input placeholder='enter your local address' />
                    <input placeholder='enter your secondary address' />
                    <input placeholder='enter pin code' />
                    <select>
                        <option>Select Your State</option>
                        <option>Maharashtra</option>
                        <option>Punjab</option>
                        <option>Kerala</option>
                        <option>Goa</option>
                    </select>

                    <button>Confirm Buy</button>
                </div>

                <div className='date-display'>
                    <p>Today's Date: {today}</p>
                </div>
            </div>
        </div>
    );
};

export default Productbuycomponets;
