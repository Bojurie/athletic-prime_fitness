import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from ".././NavBar";
import SideDesign from ".././SideBar/SideDesign";
import SidePanel from "../SidePanel";
import SignForm from "../Cards/SignForm";
function Signup() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} md={6} lg={8} style={{ backgroundColor: " #696969" }}>
        <NavBar
          navImage="https://images.unsplash.com/photo-1526407297627-d845b359a55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          height="330px"
          heading="Please Signup"
        />

        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <SignForm />
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

export default Signup;
