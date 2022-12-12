import React from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import img6 from "../images/ad-img1.jpg"
import Animaldetails from './Animaldetails';

function Animallisting({id,name,price,type,weight,age,teeth,city}) {
    console.log("Data=",id);
    const handleClick=()=>{
        console.log("Clicked");
        <NavLink to="/animaldetails" replace={true} />
    }
    return (
    <>
            <div class="product_litingbox col-lg-12 col-xs-12 col-sm-12 load-more__item">
                <div class="listing_img col-lg-4 col-xs-12 col-sm-4">
                    <a href="">
                        <img src={img6} class="img-responsive" alt="Bachda" align="middle" /></a>
                </div>
                 <div class="listing_detl col-lg-8 col-xs-12 col-sm-8" style={{backgroundColor:"#39373"}}>
                    <h3>{name}<span style={{float:"right", paddingRight: "20px"}}>{price}</span> </h3>
                    <div class="border5"></div> <div class="listing_detl1 col-lg-12 col-xs-12 col-sm-4">
                        <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> <li>
                            <strong>Type</strong> : {type}</li> <li><strong>Weight</strong> : {weight}</li> </ul>
                        <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> <li>
                            <strong>Age</strong> : {age}</li> <li><strong>Teeth</strong> : {teeth}</li> </ul>
                        <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> <li>
                                <strong>Vendor</strong> : Abdul Rauf</li> <li>
                            <strong>City</strong> : {city}</li> </ul> <ul style={{float:"left"}} class=" col-lg-3 col-xs-12 col-sm-12"> </ul> </div>
                    <div class="border5"></div> <div class="add_Cart">
                    <button onClick={handleClick} class="btn btn-secondary">   
                    <NavLink activeClassName="menu_active" exact className="nav-link" to={`/animaldetails/${id}`}>
                        View Details
                        </NavLink>
                    </button>
                    </div> </div> </div>
            </>
            )
}

            export default Animallisting