import MarkAsSoldButton from "./Markassold";
import Updatepost from "./Updatepost";
import {NavLink, useNavigate } from "react-router-dom";
const AnimalList=({srNo,id,name,type,age,weight,city})=>{
  const navigate = useNavigate();
return(
    <div class="table-responsive col-lg-12 col-xs-12 col-sm-12"
      style={{ float: "left", textAlign:"center" }}>
    <table class="table">
    <tbody style={{verticalAlign:"middle"}}>
      <tr
      >
        <th
          style={{
            width:"60px",
            paddingLeft: "25px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold"
          }}
        >
          {srNo}
        </th>
        <th
          style={{
            width:"250px",
            paddingLeft: "20px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {name}
        </th>
        <th
          style={{
            width:"180px",
            paddingLeft: "22px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {age}
        </th>
        <th
          style={{
            width:"105px",
            paddingLeft: "22px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {type}
        </th>
        <th
          style={{
            width:"75px",
            paddingLeft: "20px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {weight}
        </th>
        <th
          style={{
            width:"105px",
            paddingLeft: "20px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {city}
        </th>
        <th
          style={{
            width:"60px",
            paddingLeft: "20px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          No
        </th>
        <th
          style={{
            width:"240px",
            paddingleft: "20px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          <MarkAsSoldButton postId={id} />
            </th>
        <th
          style={{
            paddingleft: "20px",
            border: "1px solid grey",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
         <button className="signup_btm1_update"> <NavLink to={`/updatepost/${id}`} style={{textDecoration:"none", color:"white"}}>Update Post</NavLink></button>
        </th>
      </tr>
    </tbody>
  </table>
  </div>
)
}

export default AnimalList;