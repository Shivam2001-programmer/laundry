
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';
import { Line } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Order_placed',
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [200, 100, 60, 30, 60, 10, 400, 30, 10, 30, 60],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Order_Completed',
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [100, 200, 100, 0, 90, 0, 34, 59],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};



const AdminDashboard = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(0);
    const [order, setOrder] = useState(0);


    useEffect(() => {

        const token = Cookies.get('token');

        if (token !== undefined) {
            const decodedToken = jwt_decode(token);

            // Access the payload data from the decoded token
            const { user } = decodedToken;
            if (user.role === "Admin") {
                getCountUser();
                getOrderUser();
            } else {
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }, [])

    const getCountUser = async () => {

        try {
            const response = await axios.get('http://localhost:3000/api/users/getTotal');
            setUser(response.data);
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getOrderUser = async () => {

        try {
            const response = await axios.get('http://localhost:3000/api/order/getTotal');
            setOrder(response.data);
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <div className="col main pt-5 mt-3">
                <h1 className="display-4 d-none d-sm-block">
                    Dashboard
                </h1>

                <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>Holy guacamole!</strong> Its free.. this is an example theme.
                </div>
                <div className="row mb-3">
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card bg-success text-white h-100">
                            <div className="card-body bg-success">
                                <div className="rotate">
                                    <i className="fa fa-user fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Users</h6>
                                <h1 className="display-4">{user}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card text-white bg-danger h-100">
                            <div className="card-body bg-danger">
                                <div className="rotate">
                                    <i className="fa fa-list fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Order</h6>
                                <h1 className="display-4">{order}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card text-white bg-info h-100">
                            <div className="card-body bg-info">
                                <div className="rotate">
                                    <i className="fa fa-twitter fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Order pending</h6>
                                <h1 className="display-4">3</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 py-2">
                        <div className="card text-white bg-warning h-100">
                            <div className="card-body">
                                <div className="rotate">
                                    <i className="fa fa-share fa-4x"></i>
                                </div>
                                <h6 className="text-uppercase">Total Earning</h6>
                                <h1 className="display-4">14000₹</h1>
                            </div>
                        </div>
                    </div>
                    <Line options={options} data={data} />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
