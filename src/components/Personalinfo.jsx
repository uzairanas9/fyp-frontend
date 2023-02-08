import React, { useEffect, useState } from "react";
import Myaccount from "./Myaccount";
import Updateuserdata from "./Updateuserdata";
import Changepassword from "./Changepassword";
const URL = "http://localhost:5000";
function Personalinfo() {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
 
  useEffect(() => {
    const Id = localStorage.getItem("lohinUserId");
    console.log("ID is here",Id)
    setUserId(Id);
    getNotes();
  }, [userId]);
  console.log("The User Get from Local is", userId);
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${URL}/api/getSingleUser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("The json data=", json.data);
    setUserInfo(json.data);
  };

  useEffect(()=>{
    getNotes();
  },[])



  // const [isUpdated, setIsUpdated] = useState(false);

  // const handleUpdate = (updatedData) => {
  //   setUserInfo(updatedData);
  // }

   
    const handleUpdate = () => {
      setIsUpdated(true);
      getNotes();
    }
  console.log("The Data in the State", userInfo);
  return (
    <>
      <div className="container">
        <Myaccount />
        <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8">
          {" "}
          <h3>Personal Info</h3>
          <div class="info_box col-lg-8 col-xs-12 col-sm-6">
            <div class="info_txt">
              {" "}
              <ul>
                {" "}
                <li>{userInfo.name}</li>
                <li>{userInfo.email}</li>
                <li>{userInfo.phoneno}</li>
                <li></li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className="container info_box col-6" >
        <h1 class="section-heading" style={{alignItems:"left"}}>Update Your Data</h1>
      <Updateuserdata  userId = {userId} onUpdate={handleUpdate} />
      {isUpdated && <p>User data updated</p>}
    </div>

    {/* <Changepassword></Changepassword> */}
      </div>
      
    </>
  );
}

export default Personalinfo;
