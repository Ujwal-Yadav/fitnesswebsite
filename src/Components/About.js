import React from 'react'
import Mimg from '../images/8225.svg'

export const About = () => {
    return (
        <div id="about">
            <div className="container-fluid d-flex justify-content-center flex-column">
                <div className="row text-center d-flex align-items-center">
                    <div className="col-11 p-2 mx-auto">
                        <div className="col " >
                            <h2 data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"><strong className="about-heading">About Us</strong></h2>
                            <div className="about-desc p-3 " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" >
                                <h3 className="my-5">We are trying to facilitate people in fitness, exercising and improving their knowledge regarding trainings and making maintaining a healty life accessable for everyone.
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}
