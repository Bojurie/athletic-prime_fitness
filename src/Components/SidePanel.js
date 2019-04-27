import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const styles = theme => ({
  badge: {
    top: "50%",
    right: -3,
    display: "block",
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
});

function SidePanel(props) {
  const { classes } = props;

  return (
    <div style={{ backgroundColor: "#696969", height: "50px" }}>
      <IconButton aria-label="Cart">
        <Link to="/cart">
          <Badge
            badgeContent={props.counter}
            color="primary"
            size="small"
            classes={{ badge: classes.badge }}
          >
            {" "}
            <ShoppingCartIcon />{" "}
          </Badge>
        </Link>
      </IconButton>
      <br />
      <br />
      <label htmlFor="contained-button-file">
        <Animated
          animationIn="slideInRight"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1000}
          animationInDelay={2500}
        >
          {" "}
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            style={{
              color: "white",
              fontWeight: "revert",
              fontSize: "14px",
              display: "block"
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center"
              }}
            >
              Home{" "}
            </Link>
          </Button>{" "}
        </Animated>
      </label>
      <br />
      <label htmlFor="contained-button-file">
        <Animated
          animationIn="slideInRight"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1000}
          animationInDelay={2000}
        >
          {" "}
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            size="small"
            style={{
              color: "white",
              fontWeight: "revert",
              fontSize: "14px",
              display: "block"
            }}
          >
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center"
              }}
            >
              Login
            </Link>
          </Button>{" "}
        </Animated>
      </label>

      <br />
      <label htmlFor="contained-button-file">
        <Animated
          animationIn="slideInRight"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1000}
          animationInDelay={2500}
        >
          {" "}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{
              color: "white",
              fontWeight: "revert",
              fontSize: "14px",
              width: "24px"
            }}
          >
            <Link
              to="signup"
              style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center"
              }}
            >
              SignUp{" "}
            </Link>
          </Button>{" "}
        </Animated>
      </label>
    </div>
  );
}

SidePanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SidePanel);
