import react, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { toast } from 'react-toastify';
import './users.css';

const AdminUsers = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {

        const token = Cookies.get('token');

        if (token !== undefined) {
            const decodedToken = jwt_decode(token);

            // Access the payload data from the decoded token
            const { user } = decodedToken;
            if (user.role === "Admin") {
                getUsersList(token);
            } else {
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }, [])

    const getUsersList = async (token) => {
        try {
            const url = `http://localhost:3000/api/users`;
            const headers = {
                'x-auth-token': token,
            };
            const response = await axios.get(url, { headers });
            await setAllUsers(response.data)
            setLoading(false);
        } catch (error) {
            toast.error(error.message)
            setLoading(false);
        }
    }


    return (
        <div className="col main pt-5 mt-3 user_area">
            <h1>All Users</h1>
            <div className="row">
                <div className="user-area">
                    {
                        loading ?
                            <div class="spinner-border text-center" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            :
                            <table className="table table-responsive table-bordered table-hover">
                                <thead className='thead-light' >
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Date</th>
                                        {/* <th scope="col">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUsers ? allUsers.map((val, index) => {
                                            return <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.date}</td>
                                                {/* <td>
                                                    <button className='btn btn-sm btn-success'>Edit</button>&nbsp;
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

export default AdminUsers
