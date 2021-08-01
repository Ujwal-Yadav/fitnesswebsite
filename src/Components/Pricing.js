import React from 'react'

export const Pricing = () => {
    return (
        <div id="pricing">
            <div className="container pt-5">
                <div className="row text-center align-items-center justify-content-center d-flex    ">
                    <h1 className="pricing-heading text-center pb-2" data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">Pricing</h1>
                    <div className="col-md-4 gx-5 mb-5" data-aos="flip-left" data-aos-duration="1700" data-aos-once="true">
                        <div className="card p-3  " id="plan-cards1">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="plan-heading">
                                        <h2 className="text-center ">Beginner</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h1>₹700/<span className="month-text">month</span></h1>
                                <p>Personal Trainer</p>
                                <p>Convienient Time</p>
                                <p className="text-decoration-line-through">Special Class</p>
                                <p>Group Traning</p>
                                <p className="text-decoration-line-through">Free Diet Plan</p>

                                <div className="mt-5">

                                    <div className="mt-3 btn" id="btn1">JOIN NOW</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 gx-5 mb-5" data-aos="flip-left" data-aos-duration="1700" data-aos-once="true">
                        <div className="card p-3 mb-2  " id="plan-cards2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="plan-heading">
                                        <h2 className="text-center">Premium</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h1>₹1100/<span className="month-text">month</span></h1>
                                <p>Personal Trainer</p>
                                <p>Convienient Time</p>
                                <p className="text-decoration-line-through">Special Class</p>
                                <p>Group Traning</p>
                                <p>Free Diet Plan</p>
                                <div className="mt-5">

                                    <div className="mt-3 btn" id="btn2">JOIN NOW</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 gx-5 mb-5" data-aos="flip-left" data-aos-duration="1700" data-aos-once="true">
                        <div className="card p-3 mb-2  " id="plan-cards3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="plan-heading">
                                        <h2 className="text-center">Ultimate</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h1>₹1500/<span className="month-text">month</span></h1>
                                <p>Personal Trainer</p>
                                <p>Convienient Time</p>
                                <p>Special Class</p>
                                <p>Group Traning</p>
                                <p>Free Diet Plan</p>
                                <div className="mt-5">

                                    <div className="mt-3 btn" id="btn3">JOIN NOW</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
