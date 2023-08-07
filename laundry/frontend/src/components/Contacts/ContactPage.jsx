import { NavLink } from "react-router-dom"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const ContactPage = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component change
    }, [location]);


    const [loading, setLoading] = useState(false)

    const sendMail = async () => {

        var form = document.getElementById('contact_form');

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('number').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !message) {
            return toast.error("All Filed are required.")
        }

        const url = "http://localhost:3000/api/contact";

        const data = {
            name, email: email, number: phone, message
        }

        try {
            setLoading(true)
            const res = await axios.post(url, data)
            if (res.status === 201) {
                setLoading(false)
                form.reset()
                return toast.success("Email send successFully.")
            } else {
                return toast.error("Something went wrong.")
            }
        } catch (error) {
            toast.error(error)
        }

    }

    return (
        <section>
            <div className="contact_area">
                <div className="container  pt-5">
                    <div className="row">
                        <div className="col-sm-12 col-12 mx-auto mt-5">
                            <div className="row">
                                <div className="col-sm-12 col-sm-offset-2">
                                    <div>
                                        <h2 className="text-center mb-5">CONTACT US</h2>
                                    </div>
                                    <form id="contact_form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" id="name" required="" placeholder="Name*" data-form-field="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" required="" placeholder="Email*" data-form-field="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" className="form-control" name="phone" id="number" placeholder="Phone" data-form-field="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                                        </div>
                                        <div>
                                            <NavLink to="/" ><button className="btnContact" onClick={sendMail}>{loading === false ? "CONTACT US" : "Loading..."} </button></NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section >

    )
}

export default ContactPage
