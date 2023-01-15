import React from 'react'
import Myaccount from './Myaccount'

function Showinfo({name}) {

  return (
    <>
    <div className="container">
    <Myaccount/>
    <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8"> <h3>Personal Info</h3>
     <div class="info_box col-lg-8 col-xs-12 col-sm-6"> 
     <div class="info_txt"> <ul> <li>{name}</li>
     <li>uzairanas928@gmail.com</li>
     <li>03415552862</li> <li></li>
     <li>Islamabad </li><li></li> </ul> </div> </div> </div>
     </div>
    </>
  )
}

export default Showinfo