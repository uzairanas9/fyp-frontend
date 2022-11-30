import React from 'react'
import { NavLink } from "react-router-dom";
import Dashboard from './Dashboard';

function Myaccount() {
  return (
    <>
    <div className="container">
    <div class="Inner_pages col-lg-12 col-xs-12 col-sm-12"> <h2>Uzair Anas Dashboard</h2>
     <div class="border2"></div>
     <div class="dashboard_lft col-lg-3 col-xs-12 col-sm-12"> 
    <div class="dashboard_ul col-lg-12 col-xs-12 col-sm-12"> <ul>
         <li><NavLink activeClassName="menu_active" exact className="nav-link active" to="/dashboard"><i class="fa fa-angle-right"></i>Dashboard/ڈیش بورڈ</NavLink></li>
     <li><NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/personalinfo"><i class="fa fa-angle-right"></i>Personal Info/ذاتی معلومات</NavLink></li>
     <li><NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/manageanimal"><i class="fa fa-angle-right"></i>Manage Animal/جانوروں کا انتظام</NavLink></li>
     <li style={{borderBottom:"none"}}>
        <a href="https://www.bakramandi.com.pk/logout">
        <i class="fa fa-angle-right">
        </i> Log Out</a></li> </ul>
     </div> </div> 
     {/* <Dashboard/> */}
         </div>
    </div>
    </>
  )
}

export default Myaccount