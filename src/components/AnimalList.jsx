import MarkAsSoldButton from "./Markassold";
import Updatepost from "./Updatepost";
import {NavLink, useNavigate } from "react-router-dom";
const AnimalList=({srNo,id,name,type,age,weight,city})=>{
  const navigate = useNavigate();
return(
    <div class="table-responsive col-lg-12 col-xs-12 col-sm-12 border col-1"
      style={{ float: "left" }}>
    <table class="table">
    <tbody>
      <tr
      >
        <th
          style={{
            width:"20px",
            paddingLeft: "25px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold"
          }}
        >
          {srNo}
        </th>
        <th
          style={{
            width:"260px",
            paddingLeft: "20px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {name}
        </th>
        <th
          style={{
            width:"100px",
            paddingLeft: "22px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {age}
        </th>
        <th
          style={{
            width:"125px",
            paddingLeft: "22px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {type}
        </th>
        <th
          style={{
            width:"60px",
            paddingLeft: "20px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {weight}
        </th>
        <th
          style={{
            width:"80px",
            paddingLeft: "20px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {city}
        </th>
        <th
          style={{
            paddingLeft: "20px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          No
        </th>
        <th
          style={{
            paddingleft: "20px",
            borderRight: "1px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          <MarkAsSoldButton postId={id} />
          <NavLink to={`/updatepost/${id}`}>Update Post</NavLink>
        </th>
      </tr>
    </tbody>
  </table>
  </div>
)
}

export default AnimalList;