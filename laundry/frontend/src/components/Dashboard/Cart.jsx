import React from 'react'
import './cart.css'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Cart = () => {

    const navigate = useNavigate();

    const [name, setName] = useState(false)
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null);


    const [cart, setcart] = useState([])



    useEffect(() => {
        const token = Cookies.get('token');
        if (token !== undefined) {
            const decodedToken = jwt_decode(token);
            setToken(token)


            // Access the payload data from the decoded token
            const { user } = decodedToken;
            setName(user.name)
            setUserId(user.id)
            getCart();
        } else {
            navigate('/')
        }
    }, [])

    const price = 240;
    const getCart = () => {
        const cartData = localStorage.getItem('cart');
        // Convert the cart data to an array (if it exists)
        const cartItems = cartData ? JSON.parse(cartData) : [];
        setcart(cartItems)

    }



    const buttonSubmit = async () => {

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        // const sName = document.getElementById('sName').innerHTML;


        let payment_mode;
        if (document.getElementById('bank').checked == true) {
            payment_mode = "Bank";
        } else {
            payment_mode = "Cod";
        }

        if (!date || !time || !cart.length || !name || !phone || !country || !address || !city || !state || !zip) {
            return toast.error("All Filed are required")
        }
        try {

            if (payment_mode != "Cod") {
                return paymentHandler();
            } else {
                // const addressObj = {
                //     schedule_date: date,
                //     schedule_time: time,
                //     name,
                //     phone,
                //     address: `${address} ${country} ${city} ${state} ${zip}`,
                //     payment_mode,
                //     user_id: userId
                // }

                const orderObj = {}

                cart.map(async (val) => {
                    orderObj.qty = val.qty,
                        orderObj.service_type = val.name,
                        orderObj.payment = val.qty * 240,
                        orderObj.schedule_date = date,
                        orderObj.schedule_time = time,
                        orderObj.name = name,
                        orderObj.phone = phone,
                        orderObj.address = `${address} ${country} ${city} ${state} ${zip}`,
                        orderObj.payment_mode = payment_mode,
                        orderObj.user_id = userId

                    const headers = {
                        'x-auth-token': token,
                    };

                    // save order in database user wise
                    const url = "http://localhost:3000/api/order/";

                    const res = await axios.post(url, orderObj, {
                        headers
                    });
                    console.log(res);
                    if (res.status === 201) {
                        toast.success("Order added SuccessFully")
                        navigate('/dashboard')

                        localStorage.removeItem('cart');

                    }
                    else if (res.status === 401) {
                        toast.success("Unauthorized")
                    }
                })

            }
        } catch (error) {
            return toast.error(error.message)
        }
    }

    const paymentHandler = async (e) => {
        const API_URL = 'http://localhost:3000/api/order/';

        const orderUrl = `${API_URL}orderPayment`;

        const response = await axios.get(orderUrl);
        const { data } = response;
        const options = {
            key: "rzp_test_AA4NwVPxxntMXR",
            name: "cleanX",
            description: "Landry cleanX",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    console.log(paymentId);
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await axios.post(url, {})
                    console.log(captureResponse.data);
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: "#FF3636",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className='container-fluid pt-5' id='cart'>
            <div className="row pt-4">
                <div className='p-0' style={{ width: '100%' }}>
                    <img src="/src/asset/images/date_time_pg_banner.jpg" width="100%" alt="" />
                </div>
                <div className="col-md-12 col-12 left_wash_service">
                    <div class="container mt-5">
                        <div class="title">
                            <h2>Order Form</h2>
                        </div>
                        <div class="d-flex">
                            <form action="" method="">
                                <label>
                                    <span class="date">Pickup Date <span class="required">*</span></span>
                                    <input type="date" id='date' name="date" />
                                </label>
                                <label>
                                    <span class="time">Pickup Time <span class="required">*</span></span>
                                    <input type="time" id='time' name="time" />
                                </label>
                                <label>
                                    <span class="name">Full Name <span class="required">*</span></span>
                                    <input type="text" id='name' name="name" value={name} />
                                </label>
                                <label>
                                    <span>Phone <span class="required">*</span></span>
                                    <input type="number" id='phone' name="city" />
                                </label>
                                <label>
                                    <span>Country <span class="required">*</span></span>
                                    <select name="selection" id='country'>
                                        <option value="India">India</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Street Address <span class="required">*</span></span>
                                    <input type="text" id='address' name="houseadd" placeholder="House number and street name" required />
                                </label>
                                <label>
                                    <span>Town / City <span class="required">*</span></span>
                                    <input type="text" id='city' name="city" />
                                </label>
                                <label>
                                    <span>State / County <span class="required">*</span></span>
                                    <input type="text" id='state' name="state" />
                                </label>
                                <label>
                                    <span>Postcode / ZIP <span class="required">*</span></span>
                                    <input type="number" id='zip' name="zip" />
                                </label>
                            </form>
                            <div class="Yorder">
                                <h6 className='text-center mb-3'>Order Details</h6>
                                <table class="table table-bordered text-center">
                                    <thead>
                                        <th scope="col">Id</th>
                                        <th scope="col">Service type</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        {/* <th scope="col">Action</th> */}
                                    </thead>
                                    {
                                        cart.length != 0 ? cart.map((val, index) => {
                                            return (
                                                <>
                                                    <tbody className='m-0'>
                                                        <th scope="row" className='p-1'>{index + 1}</th>
                                                        <td className='p-1'>{val.name}</td>
                                                        <td className='p-1'>{val.qty}</td>
                                                        <td className='p-1'>{val.qty * price}</td>
                                                        {/* <td className='p-1'> <a href="" onClick={() => deleteCart(val.id)}>Delete</a> </td> */}
                                                    </tbody >
                                                </>
                                            )
                                        }) : "No Cart"
                                    }
                                </table ><br />

                                <div className='radio_button'>
                                    <input type="radio" id='bank' name="radio" value="online_bank_tranfer" checked />Bank Transfer
                                </div>
                                <div className='radio_button'>
                                    <input type="radio" id='cash' name="radio" value="cash_on_delivery" /> COD
                                </div>
                                <div>
                                </div>
                                <button type="button" id='orderSubmit' onClick={buttonSubmit}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart
