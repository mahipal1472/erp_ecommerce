import React from "react";
import "./Admin_panel.css"
import slide1 from "../../assets/img/a.jpg"
import slide2 from "../../assets/img/a1.jpg"
import slide3 from "../../assets/img/abt.jpg"
import  Restaurant from "../images/Restaurant.jpg"
import  bridal from "../images/Bridal-Jewelry.jpg"
import backery from "../images/backery.jpg"
import  chocolates from "../images/chocolates.jpg"
import  dairy from "../images/dairy.jpg"
import  electronic from "../images/electronic.png"
import  grocery from "../images/grocery.jpg"
import  ecomlogoo from "../images/ecomlogoo.png"
export default function AdminPanel() {
    return (
        <>
            <div className="container-fluid bg-light">
                <div class="row">
                    <div class="col-md-5 col-12 mx-auto">
                        <div class="small fw-light"></div>
                        <div class="input-group">
                            <input class="form-control border-end-0 border rounded-pill p-4 mt-2" type="search" value="search" id="example-search-input"></input>
                            <span class="input-group-append">
                                <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-12 shadow-sm m-0 mt-4 rounded">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel h-75">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={slide1} class="d-block shadow-sm rounded" />
                            </div>
                            <div class="carousel-item">
                                <img src={slide2} class="d-block shadow-sm rounded " />
                            </div>
                            <div class="carousel-item">
                                <img src={slide3} class="d-block shadow-sm rounded" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                    <div className="row mt-3 shadow-lg rounded">
                        <div className="col-md-3 col-6 mahi ">
                            
                            <img src={bridal} className="image shadow-sm rounded"/>
                            <div className="tooter">
                                <p>Jewelry</p>
                            </div>
                            
                        </div>
                        <div className="col-md-3 col-6 shadow-sm ">
                        <div className="shadow-sm rounded mt-2">
                            <img src={Restaurant} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>Restaurant</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 shadow-sm "> 
                        <div className="shadow-sm rounded mt-2">
                            <img src={backery} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>backery</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 shadow-sm ">
                        <div className="shadow-sm rounded mt-2">
                            <img src={chocolates} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>chocolates</p>
                            </div>
                            </div>
                        </div>
                        <div className=" col-md-3 col-6 shadow-sm ">
                        <div className="shadow-sm rounded mt-2">
                            <img src={dairy} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>dairy</p>
                            </div>
                            </div>
                            
                        </div>
                        <div className="col-md-3 col-6 shadow-sm ">
                        <div className="shadow-sm rounded mt-2">
                            <img src={electronic} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>electronic</p>
                            </div>
                            </div>
                        </div>
                        <div className=" col-md-3 col-6 shadow-sm ">
                        <div className="shadow-sm rounded mt-2">
                            <img src={grocery} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>grocery</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 ">
                        <div className="shadow-sm rounded mt-2">
                            <img src={ecomlogoo} className="img shadow-sm rounded "/>
                            <div className="footer">
                                <p>ecomlogoo</p>
                            </div>
                            </div>
                            
                        </div>
                       

                        </div>
                        

            </div>
        </>
    )
}