import React from 'react'

export default function Footer() {
    //
    return (
        <div className="container my-5 footer">
            <footer
                className="text-center text-lg-start text-white"
                style={{"backgroundColor": "#1c2331"}}
            >
                <section className="maintained">
                    <div className="container text-center text-md-start mt-5">
                    <div>
                        <a href="https://www.facebook.com/IET.CDAC.ACTS">
                            <i className="fab fa-facebook-f fa-2x me-3"></i>
                        </a>
                        <a href="https://twitter.com/IETPune?s=09">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://ietpune.com/">
                            <i className="fab fa-google fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/iet_cdac_pune/">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/iet-atc-of-cdac-acts-pune/">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/ameymj/Share-Steer-Ride-Sharing-App">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Share-Steer</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{"width": "60px", "backgroundColor": "#7c4dff", "height": "2px"}}
                                />
                                <p>
                                Quick Ride is India’s largest Carpool and Bike pool platform. Platform where verified professionals come together and help each other through Carpool, Bikepool, Taxipool.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{"width": "60px", "backgroundColor": "#7c4dff", "height": "2px"}}
                                />
                                <p>
                                    <a href="/about">About</a>
                                </p>
                                <p>
                                    <a href="/service">Services</a>
                                </p>
                                <p>
                                    <a href="/testimonial">Testimonials</a>
                                </p>
                                <p>
                                    <a href="/contact">Contact</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{"width": "60px", "backgroundColor": "#7c4dff", "height": "2px"}}
                                />
                                <p><i className="fas fa-home mr-3"></i> IET, Pune, India</p>
                                <p><i className="fas fa-envelope mr-3"></i> sharesteer@admin.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +91 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> +91 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="text-center p-3"
                    style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}
                >
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"
                    >Share-Steer.com</a
                    >
                </div>
            </footer>

        </div>
    )
}
