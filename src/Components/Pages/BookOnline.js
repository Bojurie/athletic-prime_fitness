import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from ".././NavBar";
import SideDesign from ".././SideBar/SideDesign";
import SidePanel from "../SidePanel";
import BookCard from "../Cards/BookCard";
import BookCard2 from "../Cards/BookCard2";

function BookOnline() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={8}>
          <NavBar
            navImage="https://www.golfelchaparral.com/wp-content/uploads/2018/05/bookonline2018.png"
            height="355px"
            heading="Book Online"
          />{" "}
        </Grid>
        <Grid item xs={4} md={4} sm={4} lg={3}>
          <SideDesign text="MARCHANDISE" />
        </Grid>
        <Grid item xs={2} md={2} sm={1} lg={1}>
          <SidePanel />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} sm={12} xs={12} md={12}>
          <BookCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default BookOnline;
