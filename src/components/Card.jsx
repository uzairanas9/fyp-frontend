import React from 'react'
import adimg2 from "../images/ad-img2.jpg"

function Card(props) {
    const link = `https://api.whatsapp.com/send?phone=${props.phone}&text=Hi I have seen your project on Online Bakramandi is it still available`
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={adimg2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">Price: Rs {props.price} <br/> Weight: 40KG <br/> Islamabad</p>
                        {/* <br /> */}
                        {/* <p class="card-text"></p> */}
                        <a href={link} class="btn btn-primary">Contact Seller</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card