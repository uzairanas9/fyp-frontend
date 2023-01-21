import React from 'react'
import cimg1 from "../images/headerimg2.png"

function Commonheader(props) {
    return (
        <>
            <div className="inner_banner col-lg-12 col-xs-12">
            <h1 class="section-heading">{props.title}</h1>
                {/* <img src={cimg1} class="img-responsive" alt="Bakra Mandi" /> */}
            </div>

        
        </>
    )
}

export default Commonheader