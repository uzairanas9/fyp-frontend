import React from 'react'
import Myaccount from './Myaccount'

function Dashboard() {
  return (
    <>
    <div className="container">
    {/* <div class="Inner_pages col-lg-12 col-xs-12 col-sm-12"> */}
    <Myaccount/>
    <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8">
         <h3>Welcome <strong>Uzair Anas</strong></h3>
          <div class="dashboard_box col-lg-3 col-xs-12 col-sm-12">
             <h4>Total Animals</h4> <p>0</p> </div>
              </div>
         </div>
         {/* </div> */}
    </>
  )
}

export default Dashboard