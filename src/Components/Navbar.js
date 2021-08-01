import React, { useState } from 'react'
import { Link } from "react-scroll";
export const Navbar = () => {

    return (
        <div id="nav">
            <nav className="navbar navbar-expand-lg  fixed-top" >
                <div className="container-fluid col-10">
                    <a className="navbar-brand" href="#"><strong><h2>FITNESS CIRCLE</h2></strong></a>
                    <button className="navbar-toggler navbar-light mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <Link className="nav-link" aria-current="page" to="nav">Home</Link>
                            </li>
                            <li className="nav-item  px-3">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="courses">Courses</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="pricing">Pricing</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className="nav-link" to="contact">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>
        </div>
    )
}
