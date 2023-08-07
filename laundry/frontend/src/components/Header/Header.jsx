import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="hero_area">
            <section className="slider_section ">

                <div className="container">
                    <div className="col-12 d-flex">
                        <div className="row">
                            <div className="col-md-6 mx-auto col-12">
                                <div className="home_left_area">
                                    <h1>Best <span> Wash & Iron service </span>
                                        in your doorstep</h1>
                                    <p>Smart Dhopa is the first Online Laundry Platform in DIU with the latest
                                        technology in washing, dry cleaning and laundry. Our
                                        services combine our expertise and experience acquired over a period of time to provide you with
                                        clean laundry in the shortest possible turnaround time.
                                    </p>
                                    <button className="button_service"><NavLink to="/service" className="button_service">View Services</NavLink></button>
                                </div>
                            </div>
                            <div className="col-md-6 mx-auto col-12">
                                <div id="carouselExampleSlidesOnly" className="carousel slide home_right_area" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" width="600px" height="400px" src="/src/asset/images/home1.svg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" width="600px" height="400px" src="/src/asset/images/home2.svg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" width="600px" height="400px" src="/src/asset/images/home3.svg" alt="Third slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" width="600px" height="400px" src="/src/asset/images/home4.svg" alt="Four slide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
