import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BookData from "../Cards/BookData";
import Button from "@material-ui/core/Button";
import PriceCard from "./PriceCard";
import Booking from "./Booking";
import BookForm from "../Form/BookForm";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,

    backgroundColor: theme.palette.background.paper
  }
});

class BookCard extends React.Component {
  state = {
    value: 1,
    show: false,
    show2: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(this.state.value);
  };

  render() {
    const { classes } = this.props;
    const { value, value2 } = this.state;

    let booking = this.state.show ? (
      <React.Fragment>
        {" "}
        <Booking /> <BookForm />{" "}
      </React.Fragment>
    ) : null;
    let booking2 = this.state.show2 ? (
      <React.Fragment>
        {" "}
        <Booking /> <BookForm />{" "}
      </React.Fragment>
    ) : null;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs indicatorColor="none" value={value} className="tabs">
            {" "}
            >
            <Tab
              onClick={() => {
                this.setState({ value: 1 });
              }}
              label="Personal Training"
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "verdana"
              }}
            />
            <Tab
              onClick={() => {
                this.setState({ value: 2 });
              }}
              label="Group Training"
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "verdana"
              }}
            />
            <Tab
              onClick={() => {
                this.setState({ value: 3 });
              }}
              label="Speed Training"
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "verdana"
              }}
            />
          </Tabs>
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="none"
            className="tab-1"
          >
            <Tab
              onClick={() => {
                this.setState({ value: 4 });
              }}
              label="6 1-Hour-Session"
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "verdana"
              }}
            />
            <Tab
              onClick={() => {
                this.setState({ value: 5 });
              }}
              label="9 1-Hour Package"
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "verdana"
              }}
            />
          </Tabs>
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="none"
            className="tab-2"
          >
            <Tab
              onClick={() => {
                this.setState({ value: 6 });
              }}
              label="9 1-Hour Package"
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "verdana"
              }}
            />
          </Tabs>
        </AppBar>

        {value === 1 && (
          <TabContainer>
            <Grid container>
              <Grid item lg={6} sm={12} md={12}>
                <img
                  src={BookData[0].bookImg}
                  className="tab-image"
                  alt="Nothing"
                />{" "}
              </Grid>

              <Grid item lg={6} sm={12} md={12}>
                <p className="Book-Para">{BookData[0].description}</p>
                <PriceCard price="1 HR 15 min || 60$" avatar="PT" />
                {booking}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                >
                  Book it
                </Button>
              </Grid>
            </Grid>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            {" "}
            <Grid container>
              <Grid item lg={6} sm={12} md={12}>
                <img src={BookData[1].bookImg} className="tab-image" alt="" />{" "}
              </Grid>

              <Grid item lg={6} sm={12} md={12}>
                <p className="Book-Para">{BookData[2].description}</p>
                <PriceCard price="1 HR 15 min || 20$" avatar="GT" />
                {booking2}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show2: true });
                  }}
                >
                  Book it
                </Button>
                <PriceCard price="1 HR  || 120$ 1-month" avatar="GT" />
                {booking}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                >
                  Book it
                </Button>
              </Grid>
            </Grid>{" "}
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <Grid container>
              <Grid item lg={6} sm={12} md={12}>
                <img src={BookData[2].bookImg} className="tab-image" alt="" />{" "}
              </Grid>

              <Grid item lg={6} sm={12} md={12}>
                <p className="Book-Para">{BookData[2].description}</p>
                <PriceCard price="1 HR  || 60$" avatar="ST" />
                {booking2}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show2: true });
                  }}
                >
                  Book it
                </Button>
                <PriceCard price="Twelve 1 HR 15 min || 660$" avatar="ST" />
                {booking}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                >
                  Book it
                </Button>
              </Grid>
            </Grid>{" "}
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <Grid container>
              <Grid item lg={6} sm={12} md={12}>
                <img src={BookData[3].bookImg} className="tab-image" alt="" />{" "}
              </Grid>

              <Grid item lg={6} sm={12} md={12}>
                <p className="Book-Para">{BookData[3].description}</p>
                <PriceCard price="1 HR 15 min || 300$" />
                {booking}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                >
                  Book it
                </Button>
              </Grid>
            </Grid>
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <Grid container>
              <Grid item lg={6} sm={12} md={12}>
                <img src={BookData[4].bookImg} className="tab-image" alt="" />{" "}
              </Grid>

              <Grid item lg={6} sm={12} md={12}>
                <p className="Book-Para">{BookData[4].description}</p>
                <PriceCard price="1 HR 15 min || 480$" />
                {booking}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                >
                  Book it
                </Button>
              </Grid>
            </Grid>
          </TabContainer>
        )}
        {value === 6 && (
          <TabContainer>
            <Grid container>
              <Grid item lg={6} sm={12} md={12}>
                <img src={BookData[5].bookImg} className="tab-image" alt="" />{" "}
              </Grid>

              <Grid item lg={6} sm={12} md={12}>
                <p className="Book-Para">{BookData[5].description}</p>
                <PriceCard price="1 HR 15 min || 660$" />
                {booking}
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    this.setState({ show: true });
                  }}
                >
                  Book it
                </Button>
              </Grid>
            </Grid>{" "}
          </TabContainer>
        )}
      </div>
    );
  }
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookCard);
