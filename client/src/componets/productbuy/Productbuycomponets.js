import React, { useEffect, useState } from 'react';
import { FaUser, FaStar, FaPlus, FaMinus, FaBook } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import './productbuy.css';
import { handleproductinfo } from '../handleAPI/handleapis';

const Productbuycomponets = () => {
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState({
        localAddress: '',
        secondaryAddress: '',
        pinCode: '',
        state: 'Select Your State'
    });
    const [selected, setselected] = useState([]);
    const { id } = useParams();
    console.log('Product ID:', id);

    useEffect(() => {
        const fetchallproductdata = async () => {
            try {
                const response = await handleproductinfo();
                console.log("response in product buy", response);
                var selecteProduct = response.getresult.filter((item) => item._id === id);
                setselected(selecteProduct);
                console.log('selected product is ', selecteProduct);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }

        fetchallproductdata();
    }, [id]);


    console.log("selected products", selected)

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

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };


    const handlecartdata = () => {
        const productemail = "aniket@gmail.com";
        const productname = selected[0]?.productName || '';
        const productcaption = selected[0]?.caption || '';
        const productprice = selected[0]?.price || 0;
        const productId = selected[0]?._id || '';
        const productimage = selected[0]?._id || '';

    }

    return (
        <div className='main-product-info-address'>
            <div className='product-image-a'></div>

            <div className='product-info-address'>
                <h1>
                    <FaUser style={{ marginRight: '5px' }} />
                    {selected.length > 0 ? selected[0].productName : 'Product Name'}
                </h1>
                <h1>
                    <FaBook style={{ marginRight: '5px' }} />
                    {selected.length > 0 ? selected[0].caption : 'Product Caption'}
                </h1>
                <h1>
                    $100
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
                    <button onClick={handlecartdata}>add to cart</button>

                </div>

                <div className='main-address-a'>
                    <input
                        name='localAddress'
                        placeholder='enter your local address'
                        value={address.localAddress}
                        onChange={handleAddressChange}
                    />
                    <input
                        name='secondaryAddress'
                        placeholder='enter your secondary address'
                        value={address.secondaryAddress}
                        onChange={handleAddressChange}
                    />
                    <input
                        name='pinCode'
                        placeholder='enter pin code'
                        value={address.pinCode}
                        onChange={handleAddressChange}
                    />
                    <select
                        name='state'
                        value={address.state}
                        onChange={handleAddressChange}
                    >
                        <option value="Select Your State">Select Your State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Goa">Goa</option>
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
