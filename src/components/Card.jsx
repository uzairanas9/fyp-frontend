import React from 'react'
import adimg2 from "../images/ad-img2.jpg"

function Card() {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={adimg2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Healthy Cow For Sale</h5>
                        <p class="card-text">Price: Rs 50000 <br/> Weight: 40KG <br/> Islamabad</p>
                        {/* <br /> */}
                        {/* <p class="card-text"></p> */}
                        <a href="#" class="btn btn-primary">Contact Seller</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card