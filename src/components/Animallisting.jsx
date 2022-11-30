import React from 'react'
import { NavLink } from 'react-router-dom'
import img6 from "../images/ad-img1.jpg"

function Animallisting() {
    return (
    <>
            <div class="product_litingbox col-lg-12 col-xs-12 col-sm-12 load-more__item">
                <div class="listing_img col-lg-4 col-xs-12 col-sm-4">
                    <a href="">
                        <img src={img6} class="img-responsive" alt="Bachda" align="middle" /></a>
                </div>
                 <div class="listing_detl col-lg-8 col-xs-12 col-sm-8" style={{backgroundColor:"#39373"}}>
                    <h3> Bachda - HrdB9900288 <span style={{float:"right", paddingRight: "20px"}}>Rs 220000</span> </h3>
                    <div class="border5"></div> <div class="listing_detl1 col-lg-12 col-xs-12 col-sm-4">
                        <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> <li>
                            <strong>Type</strong>: Bull</li> <li><strong>Weight</strong>: 6 man meatkg</li> </ul>
                        <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> <li>
                            <strong>Age</strong>: 02 Year 09 Months</li> <li><strong>Teeth</strong>: 2</li> </ul>
                        <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> <li>
                                <strong>Vendor</strong>: Abdul Rauf</li> <li>
                            <strong>City</strong>: Haroonabad</li> </ul> <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> </ul> </div>
                    <div class="border5"></div> <div class="add_Cart">
                    <button class="btn btn-secondary">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/animaldetails">View Details</NavLink>
                    </button>
                    </div> </div> </div>
            </>
            )
}

            export default Animallisting