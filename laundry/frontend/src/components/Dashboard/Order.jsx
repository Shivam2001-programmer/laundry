import React from 'react'
import './cart.css'
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify'


const Order = () => {
    const navigate = useNavigate();

    const [name, setName] = useState(false)
    const [data, setData] = useState([]);


    useEffect(() => {
        const token = Cookies.get('token');
        if (token !== undefined) {
            const decodedToken = jwt_decode(token);

            // Access the payload data from the decoded token
            const { user } = decodedToken;
            setName(user.name)

            getOrderList(user.id, token);

            console.log(data);

        } else {
            navigate('/')
        }
    }, [])



    const getOrderList = async (userId, token) => {
        const url = `http://localhost:3000/api/order/${userId}`;
        const headers = {
            'x-auth-token': token,
        };
        const response = await axios.get(url, { headers });
        setData(response.data);
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-12 mb-5 text-center">
                    <h1 style={{ marginTop: ' 100px ', fontSize: '1.4rem' }} className='text-center'>{name} Order History</h1>


                    <div className="order_table">


                        <table className="table table-bordered table-hover">
                            <thead className='thead-light' >
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Service Type</th>
                                    <th scope="col">Payment</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Order id</th>
                                    <th scope="col">Schedule Date</th>
                                    <th scope="col">Schedule Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ? data.map((val, index) => {
                                        return <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{val.name}</td>
                                            <td>{val.phone}</td>
                                            <td>{val.address}</td>
                                            <td>{val.service_type}</td>
                                            <td>{val.payment}</td>
                                            <td>{val.qty}</td>
                                            <td>{val.payment_mode}</td>
                                            <td>{val._id}</td>
                                            <td>{val.schedule_date}</td>
                                            <td>{val.schedule_time}</td>

                                        </tr>
                                    })
                                        : <tr ><td colSpan="10">No order are here</td></tr>
                                }
                            </tbody >
                        </table>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Order
