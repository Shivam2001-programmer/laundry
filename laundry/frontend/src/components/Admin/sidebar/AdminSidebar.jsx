import './dashboard.css'
import './dashboard_style'
import AdminDashboard from "../Dashboard/AdminDashboard";
import AdminOrder from "../Orders/AdminOrder";
import AdminUsers from "../Customers/AdminUsers";
import AdminSupport from "../Customers/AdminSupport";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'


const AdminSidebar = () => {

    const navigate = useNavigate();

    // logout function
    const logout = () => {
        Cookies.remove('token');
        navigate('/')
    }

    return (
        <div>
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-md-3 col-lg-2 p-0 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ minHeight: '100vh' }}>
                        <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                            <li className="nav-item"><NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink></li>
                            <li className="nav-item"><NavLink to="/admin/orders" className="nav-link">Orders</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/admin/products" className="nav-link">Poducts</NavLink></li> */}
                            <li className="nav-item"><NavLink to="/admin/users" className="nav-link">Users</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/admin/registration" className="nav-link">Registration</NavLink></li> */}
                            <li className="nav-item"><NavLink to="/admin/support" className="nav-link">Support</NavLink></li>
                            <li className="nav-item"><button className="nav-link" style={{ background: 'white', border: 'none', color: 'black', marginLeft: '14px' }} onClick={logout}>Logout</button></li>
                        </ul>
                    </div>
                    {
                        window.location.pathname == '/admin/dashboard' ? <AdminDashboard />
                            : window.location.pathname == "/admin/orders" ? <AdminOrder />
                                : window.location.pathname == "/admin/users" ? <AdminUsers />
                                    : window.location.pathname == "/admin/support" ? <AdminSupport />
                                        : ""
                    }

                    {/* {<AdminDashboard />} */}
                    {/* {<AdminOrder />} */}
                    {/* <AdminUsers /> */}
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar


