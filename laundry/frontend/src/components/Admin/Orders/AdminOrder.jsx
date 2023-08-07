import react, { useEffect, useState } from 'react';
import './order.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminOrder = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [allOrders, setallOrders] = useState([])


    useEffect(() => {

        const token = Cookies.get('token');

        if (token !== undefined) {
            const decodedToken = jwt_decode(token);

            // Access the payload data from the decoded token
            const { user } = decodedToken;
            if (user.role === "Admin") {
                getOrderList(token);
            } else {
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }, [])

    const getOrderList = async (token) => {
        try {
            const url = `http://localhost:3000/api/order`;
            const headers = {
                'x-auth-token': token,
            };
            const response = await axios.get(url, { headers });
            await setallOrders(response.data)
            setLoading(false);
        } catch (error) {
            toast.error(error.message)
            setLoading(false);
        }
    }


    return (
        <div className="col main pt-5 mt-3 admin_order" id=''>
            <h1>All orders</h1>
            <div className="row">
                <div className="order-area">
                    {
                        loading ?
                            <div class="spinner-border text-center" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            :
                            <table className="table table-sm table-responsive table-bordered table-hover">
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
                                        {/* <th scope="col">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrders ? allOrders.map((val, index) => {
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
                                                {/* <td>
                                                    <button className='btn btn-sm btn-success'>Edit</button>
                                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                                </td> */}

                                            </tr>
                                        }) : <tr ><td colSpan="10">No order are here</td></tr>
                                    }
                                </tbody>
                            </table>
                    }

                </div>
            </div>
        </div >
    )
}

export default AdminOrder
