const Footer = () => {
    return (
        <>
            <section className="info_section layout_padding2 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 info-col">
                            <div className="info_detail">
                                <h4>
                                    About
                                </h4>
                                <p>
                                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                </p>
                                <div className="info_social">
                                    <a href="">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-6  info-col">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 info-col">
                            <div className="info_contact">
                                <h4>
                                    Contact Info
                                </h4>
                                <div className="contact_link_box">
                                    <p>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Location
                                        </span>
                                    </p>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            mishivam673@gmail.com
                                        </span>
                                    </a>
                                    <p>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <span>
                                            Mon-Sat: 09.00 am - 06.00 pm
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <span>
                                            Sunday: closed
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer_section">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="/"> E-laundry</a>
                    </p>
                </footer>
            </section >

        </>
    )
}

export default Footer
