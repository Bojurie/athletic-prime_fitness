import React from "react";
import { Link } from "react-router-dom";
function SideDesign(props) {
  return (
    <div className="wrapper">
      <div className="slide">
        {" "}
        <img
          style={{ marginTop: "200px", marginLeft: "50px" }}
          src="https://sitejerk.com/images/right-arrow-png-transparent-1.png"
          width="200px"
          height="30px"
          alt=""
        />{" "}
      </div>
      <h3 style={{ textAlign: "center" }}>
        {" "}
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            padding: "0",
            marginRight: "15px"
          }}
          to={`/${props.text.toLowerCase()}`}
        >
          {props.text}{" "}
        </Link>{" "}
      </h3>
    </div>
  );
}

export default SideDesign;
