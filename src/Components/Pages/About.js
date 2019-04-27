import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from ".././NavBar";
import SideDesign from ".././SideBar/SideDesign";
import SidePanel from "../SidePanel";
function About() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6} md={6} lg={8} style={{ backgroundColor: " #696969" }}>
          <NavBar
            navImage="https://images.unsplash.com/photo-1526403646408-57b94dc15399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            height="100%"
            heading="We Believe in Effort"
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "20px",
              margin: "10px",
              backgroundColor: "#696969",
              color: "white",
              opacity: "0.8",
              fontFamily: "verdana",
              boxShadow: "1px 20px 5px 5px #403434",
              border: "4px outset #F5DEB3",
              borderRadius: "25px"
            }}
          >
            {" "}
            Athlete Training
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "20px",
              margin: "25px",
              backgroundColor: "#696969",
              color: "white",
              opacity: "0.8",
              fontFamily: "verdana",
              boxShadow: "1px 30px 5px 5px #403434",
              border: "4px outset #F5DEB3",
              borderRadius: "25px"
            }}
          >
            {" "}
            Personal Training
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "20px",
              margin: "40px",
              backgroundColor: "#696969",
              color: "white",
              opacity: "0.8",
              fontFamily: "verdana",
              boxShadow: "1px 30px 5px 5px #403434",
              border: "4px outset #F5DEB3",
              borderRadius: "25px"
            }}
          >
            {" "}
            Group Training
          </p>
        </Grid>
        <Grid item xs={4} md={4} lg={3}>
          <SideDesign text="MARCHANDISE" />
          <SideDesign text="BOOKONLINE" />
        </Grid>
        <Grid item xs={2} md={2} lg={1}>
          <SidePanel />
        </Grid>
      </Grid>
      <Grid container>
        <p
          style={{
            textAlign: "justify",
            fontSize: "15px",
            padding: "20px",
            margin: "10px",
            backgroundColor: "#696969",
            color: "white",
            opacity: "0.8",
            fontFamily: "verdana",
            boxShadow: "1px 5px 5px 5px #403434",
            border: "4px outset #F5DEB3",
            borderRadius: "50px"
          }}
        >
          I was created with the focus to train and mentor anyone trying to
          obtain or improve on a healthier lifestyle. No matter your staring
          point, your athletic ability, or the end result you are seeking we are
          here to help. It is true that hard work does pay off and it is my
          passion to help you physically and mentally become stronger to reach
          your potential.
          <br /> <br />
          I am Bojurie. As your Personal or Athletic Sports Trainer, and a
          former NCAA Qualifying Athlete, I understand the importance of
          building a foundation of strength, conditioning and physical
          preparation. I am here to guide you on the path of becoming a more fit
          version of yourself.
          <br />
          For the At Home Individual – tailored to your personal goals. ​
          <br />
          For the PRO Athlete – customized with the goal to ascend to the next
          level within your sport while consistantly improving your ability and
          technique.
          <br /> <br />
          For the Up-n-Coming Athlete – who wants to increase their speed,
          agility, and techniques to promote a high-level of competition at an
          early age. And prepare for NCAA DI & DII schools - potential
          scholarship awards.
          <br />
          Serving Southern California at various locations – fields, local
          parks, and beaches in your area. ​ ATHLETIC PRIME is always seeking to
          build additional partnerships with High Schools, Community Colleges
          and Universities; Athletic Directors, Coaches, PRO Athletes and
          Players. If you are interested in a partnership, <br /> <br /> Please
          email: athleticprime@gmail.com
        </p>
      </Grid>
    </div>
  );
}

export default About;
