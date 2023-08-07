import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";



const NavBar = () => {
    const navigate = useNavigate();

    const [showBag, setShowBag] = useState(false)
    const [name, setName] = useState(false)
    const [token, setToken] = useState(null)

    const [cartLen, setcartLen] = useState(0)


    useEffect(() => {

        const token = Cookies.get('token');

        if (token !== undefined) {
            const decodedToken = jwt_decode(token);
            setToken(decodedToken)

            // Access the payload data from the decoded token
            const { user } = decodedToken;

            setName(user.name)

            setShowBag(true);
        }

        // cart length get and set in icon

        const cartData = localStorage.getItem('cart');
        // Convert the cart data to an array (if it exists)
        const cartItems = cartData ? JSON.parse(cartData) : [];
        const len = cartItems.length;

        setcartLen(len)
        // localStorage.setItem('cartLength', len);

    }, []);

    // logout function
    const logout = () => {
        Cookies.remove('token');
        navigate('/')
    }

    return (
        <header className="header_section">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <NavLink to="/" className="navbar-brand">
                        <span>
                            <img src="/src/asset/images/logo.png" width="160px" heigth="10px" alt="" />
                        </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About Us</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/service" className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                            </li>
                            {
                                showBag ?
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/cart-and-shipment" className="nav-link">Bag<span class="badge badge-dark ml-1"></span></NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                                        </li>
                                    </>

                                    : ""
                            }



                            {
                                name ?
                                    <div class="dropdown" id="profile">
                                        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {name}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {/* <a class="dropdown-item" href="#">My Profile</a> */}
                                            <a class="dropdown-item" href="" onClick={logout}>Sign Out</a>
                                        </div>
                                    </div> :
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">Login</NavLink>
                                    </li>
                            }

                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}

export default NavBar
