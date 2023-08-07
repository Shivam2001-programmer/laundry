import { toast } from 'react-toastify';
import axios from 'axios';
import './login.css'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';



const Login = () => {

    const navigate = useNavigate();

    // user login api 
    const login = async () => {

        try {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email && !password) {
                return toast.error('All Filed are required')
            }
            const url = "http://localhost:3000/api/auth";
            const user = await axios.post(url, { email, password });

            Cookies.set('token', user.data.token, { expires: 3600000 })

            if (user.status === 200) {
                const token = Cookies.get('token');
                if (token !== undefined) {
                    const decodedToken = jwt_decode(token);
                    // Access the payload data from the decoded token
                    const { user } = decodedToken;

                    if (user.role === "Admin") {
                        navigate('/admin/dashboard')
                    } else {
                        navigate('/wash-service')
                    }
                }

            }
        } catch (error) {
            return toast.error('Invalid your credentials')
        }
    }


    // user register api

    const register = async () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('emailId').value;
        const password = document.getElementById('pass').value;

        const data = {
            name,
            email,
            password
        }

        try {
            if (!name && !email && !password) {
                toast.error('All Filed are required')
            } else {
                const url = "http://localhost:3000/api/users/create";

                const user = await axios.post(url, data);

                if (user.status === 201) {
                    toast.success('You are register successFully')
                    // navigate('/login#')
                    window.location.href = "/login#"
                }
            }
        } catch (error) {
            toast.error('Username or email is already used')
        }

    }

    return (
        <>
            <div id="container" className='user_auth'>
                <div id="cover">
                    <h1 className="sign-up">Hello, Guess!</h1>
                    <p className="sign-up">Enter your personal details<br /> and start a journey with us</p>
                    <a className="button sign-up" href="#cover">Sign Up</a>
                    <h1 className="sign-in">Welcome Back!</h1>
                    <p className="sign-in">To keep connected with us please<br /> login with your personal info</p>
                    <br />
                    <a className="button sub sign-in" href="#">Sign In</a>
                </div>
                <div id="login">
                    <h1>Sign In</h1>
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" /></a>&nbsp;
                    <p>or use your email account:</p>
                    <input type="email" placeholder="Email" id='email' /><br />
                    <input type="password" placeholder="Password" id='password' /><br />
                    <a id="forgot-pass" href="#">Forgot your password?</a><br />
                    <button className="submit-btn" onClick={login}>Sign In</button>
                </div>
                <div id="register">
                    <h1>Create Account</h1>
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/49/49026.png" /></a>&nbsp;
                    <a href="#"><img className="social-login" src="https://image.flaticon.com/icons/png/128/34/34227.png" /></a>&nbsp;
                    <p>or use your email for registration:</p>
                    <input type="text" placeholder="Name" id='name' /><br />
                    <input type="email" placeholder="Email" id='emailId' /><br />
                    <input type="password" placeholder="Password" id='pass' /><br />
                    <button className="submit-btn" onClick={register}> Sign Up</button>
                </div>
            </div >
        </>


    )
}

export default Login
