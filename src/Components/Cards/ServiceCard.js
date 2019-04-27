import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import nine from "../../Assets/Pics/nine.jpeg";
import group from "../../Assets/Pics/group.jpeg";
import pic3 from "../../Assets/Pics/pic3.jpeg";
import speed from "../../Assets/Pics/speed.jpeg";
import Personal from "../../Assets/Pics/Personal.jpeg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "SPEED AND AGILITY",
    imgPath: speed
  },
  {
    label: "PERSONAL TRAINING",
    imgPath: Personal
  },
  {
    label: "GROUP TRAINING",
    imgPath: group
  },
  {
    label: "MUSCLE TONE",
    imgPath: pic3
  },
  {
    label: "CORE STRENGTH",
    imgPath: nine
  }
];

const styles = theme => ({
  root: {
    maxWidth: 900,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 30,
    texrAlign: "center",
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 438,
    display: "block",
    maxWidth: 1000,
    overflow: "hidden",
    width: "100%"
  }
});

class ServiceCard extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={2} className={classes.header}>
          <Typography
            style={{
              color: "black",
              textAlign: "center",
              fontFamily: "verdana",
              fontWeight: "bold",
              fontSize: "14px"
            }}
          >
            {tutorialSteps[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        /> */}
      </div>
    );
  }
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ServiceCard);
