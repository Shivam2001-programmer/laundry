import { NavLink } from "react-router-dom"


const Services = () => {
    return (
        <section className="service_section layout_padding">
            <div className="container">
                <div className="row">
                    <h2 className="text-center mb-5 mt-5">Our Services</h2>
                    <div className="col-md-12 col-12">
                        <div className="row">
                            <div className="col-md-4 col-12 mb-3">
                                <div class="card" style={{ width: '18rem' }}>
                                    <img class="card-img-top" src="/src/asset/images/s2.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Wash & Fold</h5>
                                        <p class="card-text">Just in case you choose not to use our steam ironing services we will wash and fold them for you.</p>
                                        <NavLink id="buttonService" to="/wash-service">Select Service</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <div class="card" style={{ width: '18rem' }}>
                                    <img class="card-img-top" src="/src/asset/images/s1.jpeg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Wash & Iron</h5>
                                        <p class="card-text">All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</p>
                                        <NavLink id="buttonService" to="/wash-service">Select Service</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <div class="card" style={{ width: '18rem' }}>
                                    <img class="card-img-top" src="/src/asset/images/s4.jpg" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">Dry Cleaning</h5>
                                        <p class="card-text">All your sensitive and special garments will be individually treated for any stains and dry cleaned.</p>
                                        <NavLink id="buttonService" to="/wash-service">Select Service</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services
