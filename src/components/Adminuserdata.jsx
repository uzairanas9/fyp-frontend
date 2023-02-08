import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink, Link} from 'react-router-dom';
import Adminallposts from './Adminallposts';
import Getcontactform from './Getcontactform';

const AdminUserData = () => {
  const [users, setUsers] = useState([]);
//   const [Id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get("http://localhost:5000/api/getAlluser");
        setUsers(result.data.data);
      };
    fetchData();
  }, []);

  return (
    <>
    <h1 className="section-heading" style={{marginTop:"20px"}}>User Data</h1>
    
   <NavLink to='/Adminallposts' >  <button className="signup_btm1" style={{textalign:"center", marginBottom:"50px", marginLeft:"60px", fontSize:"18px"}}> All Ads</button> </NavLink>
   <NavLink to='/Getcontactform' >  <button className="signup_btm1" style={{textalign:"center", marginBottom:"50px", marginLeft:"30px", fontSize:"18px"}}> Contact Form Data</button> </NavLink>
   
    <div class="table-responsive col-lg-12 col-xs-12 col-sm-12 col-1"
    style={{ float: "left", marginTop:"10px" }}>
      <table className="table1" style={{marginLeft:"60px", marginBottom:"30px"}}>
        <thead>
          <tr style={{
                    backgroundColor: "#11b2a5",
                    borderBottom: "3px solid grey",
                  }}>
            <th style={{width:"250px"}}>Name</th>
            <th style={{width:"450px"}}>Email</th>
            <th style={{width:"250px"}}>Phone Number</th>
            <th style={{width:"250px"}}>User Id</th>
            <th style={{width:"150px"}}>Update Data</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            
            <tr key={user._id}>
              <td style={{border: "2px solid #11b2a5" ,paddingLeft: "15px"}}>{user.name}</td>
              <td style={{border: "2px solid #11b2a5" ,paddingLeft: "15px"}}>{user.email}</td>
              <td style={{border: "2px solid #11b2a5" ,paddingLeft: "15px"}}>+92 {user.phoneno}</td>
              <td style={{border: "2px solid #11b2a5" ,paddingLeft: "15px"}}>{user._id}</td>
              <td style={{border: "2px solid #11b2a5" ,paddingLeft: "15px"}}><NavLink to={`/AdminUpdateData/${user._id}` } >Update User Data</NavLink> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminUserData;
