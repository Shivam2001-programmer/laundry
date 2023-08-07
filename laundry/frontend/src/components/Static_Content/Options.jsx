import React from 'react'
import './options.css'


const Options = () => {
    return (
        <div className='container mt-5' id='options_service'>
            <div className="row">
                <div className="col-md-12 col-12 mx-auto">
                    <h3 className='text-center mt-5 mb-4'>Why Choose Us</h3>
                    <div className="row mx-auto">
                        <div className="col-md-4 col-sm-6  mx-auto p-0">
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">
                                    <div className="card-img text-center" >
                                        <i className="fa fa-truck" aria-hidden="true"></i>
                                    </div>
                                    <h5 className="card-title text-center">Free Pickup & Delivery </h5>
                                    <p className="card-text">Doorstep Pickup and Your clothes will be delivered at your doorstep on time and as fresh as daisy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto p-0">
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">
                                    <div className="card-img">
                                        <i class="fas fa-soap"></i>
                                    </div>
                                    <h5 className="card-title text-center">Hygienic</h5>
                                    <p className="card-text">Your clothes are hygienically washed so they are germ free and clean. The way you think about laundry!.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto p-0">
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">
                                    <div className="card-img">
                                        <i className="fa fa-leaf" aria-hidden="true"></i>
                                    </div>
                                    <h5 className="card-title text-center">Affordable</h5>
                                    <p className="card-text">No Additional Cost! You pay just as same as the price set by your selected laundry vendor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto p-0">
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">
                                    <div className="card-img">
                                        <i className="fa fa-leaf" aria-hidden="true"></i>
                                    </div>
                                    <h5 className="card-title text-center">Eco Friendly</h5>
                                    <p className="card-text">Local residents love on our reliable laundry & dry cleaning services for the fast, accurate, top quality results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto p-0">
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">
                                    <div className="card-img">
                                        <i class="fa-solid fa-medal"></i>
                                    </div>
                                    <h5 className="card-title text-center">Quality Guarantee</h5>
                                    <p className="card-text">We are professionals in the laundry business, which means we always up to date on the latest technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto p-0">
                            <div className="card" style={{ width: '18rem' }} >
                                <div className="card-body">
                                    <div className="card-img">
                                        <i class="fas fa-money-bill-alt"></i>
                                    </div>
                                    <h5 className="card-title text-center">Transparent Pricing</h5>
                                    <p className="card-text">In Affordable price our services in the same budget or less than any other local laundry services near you..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options
