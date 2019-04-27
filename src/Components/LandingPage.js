import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeBar from "./Cards/HomeBar";
import SideBar from "./SideBar/SideBar";
import SidePanel from "./SidePanel";
import HomeCard from "./Cards/HomeCard";
import VideoCard from "./Cards/VideoCard";
function LandingPage() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} md={6} lg={8}>
        <HomeBar />
      </Grid>
      <Grid item xs={4} md={4} lg={3}>
        <SideBar />
      </Grid>
      <Grid item xs={2} md={2} lg={1}>
        <SidePanel />
      </Grid>

      <Grid item lg={12} sm={12} md={12}>
        <h2
          style={{
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#696969",
            color: "white",
            fontFamily: "verdana"
          }}
        >
          WELCOME TO{" "}
          <span
            style={{
              fontSize: "30px",
              color: "tan",
              fontFamily: "verdana",
              fontWeight: "200px"
            }}
          >
            ATHLETIC PRIME{" "}
          </span>
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            padding: "10px",
            margin: "3px",
            backgroundColor: "#696969",
            color: "white",
            opacity: "0.8",
            fontFamily: "verdana",
            boxShadow: "10px 10px 5px 5px #403434",
            border: "5px outset #F5DEB3",
            borderRadius: "50px"
          }}
        >
          Our goal, is to unleash your inner athlete. We want you to see a
          change in your body and love how it feels. We work with anyone and
          everyone who has a desire to keep or improve their lifestyle by
          offering year-round one on one training, boot camps, and more!
          <br /> <br />
          ​ As a team, we will work together to help you reach your goals!
          <br /> <br />
        </p>
      </Grid>

      <Grid item lg={4} xs={12} md={4}>
        <HomeCard
          HomeImage="https://images.unsplash.com/photo-1533681475364-326b6803d677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title=" Speed Training 
              "
        />
      </Grid>
      <Grid item lg={4} xs={12} md={4}>
        <HomeCard
          HomeImage="https://images.unsplash.com/photo-1533560974115-3c8b3b6a0082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title="Corporate Training"
        />
      </Grid>
      <Grid item lg={4} xs={12} md={4}>
        <HomeCard
          HomeImage="https://images.unsplash.com/photo-1514898661705-b3fe699aa09e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          title=" One on One"
        />
      </Grid>

      <Grid item lg={4} md={8} sm={12}>
        <VideoCard videoUrl="pyNltNXWRB8" />
      </Grid>
      <Grid item lg={4} md={8} sm={12}>
        <VideoCard videoUrl="5unRrVrEm0k" />
      </Grid>
      <Grid item lg={4} md={8} sm={12}>
        <VideoCard videoUrl="pyNltNXWRB8" />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
