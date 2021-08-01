import React from 'react'

export const Contact = () => {
    return (
        <div id="contact">
            <div className="container text-center align-items-center justify-content-center pb-5 p-5 " >

                <h3 className="contact-heading text-center pt-5" data-aos="fade" data-aos-duration="1800" data-aos-once="true">Contact Us</h3><br />

                <div className="row">
                    <div className="col-md-8 " data-aos="slide-right" data-aos-duration="1500" data-aos-once="true">
                        <form>
                            <input className="form-control" name="name" placeholder="Name..." /><br />
                            <input className="form-control" name="phone" placeholder="Phone..." /><br />
                            <input className="form-control" name="email" placeholder="E-mail..." /><br />
                            <textarea className="form-control" name="text" placeholder="How can we help you ?" ></textarea><br />
                            <input className="btn btn-primary m-3 px-5 py-2" type="submit" value="SEND" /><br /><br />
                        </form>
                    </div>
                    <div className="col-md-4" data-aos="fade-in" data-aos-duration="1800" data-aos-once="true">
                        <b>Customer service:</b> <br />
                        Phone: +91 123 456 7890<br />
                        E-mail: <a href="mailto:support@fitnesscircle.com">support@fitnesscircle.com</a><br />
                        <br /><br />
                        <b>Headquarter:</b><br />
                        Fitness Circle, <br />
                        Sector-2,CDA<br />
                        Cuttack, India<br />
                        Phone: +91 987 654 3210<br />

                    </div>
                </div>

                <div className="social-icons container text-center align-items-center justify-content-center">
                    <a target="_blank" href="https://www.facebook.com" className="px-3 fa fa-facebook"></a>
                    <a target="_blank" href="https://www.twitter.com" className="px-3 fa fa-twitter"></a>
                    <a target="_blank" href="https://www.instagram.com" className="px-3 fa fa-instagram"></a>
                    <a target="_blank" href="https://www.youtube.com" className="px-3 fa fa-youtube"></a>
                </div>
            </div>
        </div>
    )
}
