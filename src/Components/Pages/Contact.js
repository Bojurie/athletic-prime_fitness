import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from ".././NavBar";
import SideDesign from ".././SideBar/SideDesign";
import SidePanel from "../SidePanel";
import Form from "../Form/Form";

function Contact() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} md={6} lg={8} style={{ backgroundColor: " #696969" }}>
        <NavBar
          navImage="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          height="330px"
          heading="Contact US"
        />{" "}
        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            padding: "0px",
            margin: "0",
            backgroundColor: "#696969",
            color: "white",
            opacity: "0.8",
            fontFamily: "verdana",
            boxShadow: "1px 5px 5px 5px #403434",
            border: "4px outset #F5DEB3",
            borderRadius: "25px"
          }}
        >
          Contact us
          <br />
          <p>
            <span
              style={{ color: "tan", fontWeight: "bold", fontSize: "14px" }}
            >
              {" "}
              EMAIL{" "}
            </span>
            :athleticprime@gmail.com{" "}
          </p>
          <p>
            <span
              style={{ color: "tan", fontWeight: "bold", fontSize: "14px" }}
            >
              {" "}
              Phone
            </span>
            :949.274.6106{" "}
          </p>
          {/* <br />
          <span style={{ color: "tan", fontWeight: "bold" , fontSize:'14px' }}> EMAIL </span>{" "}
          :athleticprime@gmail.com{" "}
          <span style={{ color: "tan", fontWeight: "bold",fontSize:'14px' }}> PHONE </span>{" "}
          :949.274.6106 */}
        </div>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Form />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} md={4} lg={3}>
        <SideDesign text="MARCHANDISE" />
        <SideDesign text="BOOKONLINE" />
      </Grid>
      <Grid item xs={2} md={2} lg={1}>
        <SidePanel />
      </Grid>
    </Grid>
  );
}

export default Contact;
