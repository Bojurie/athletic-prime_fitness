import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-responsive-modal";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import logo from ".././Assets/Logo/logo1.png";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavBar extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className="app-bar"
          style={{
            backgroundImage: `url(${this.props.navImage})`,
            height: `${this.props.height}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.9",
            width: "100%"
          }}
        >
          <Toolbar>
            {" "}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={1000}
                animationInDuration={2000}
              >
                {" "}
                <img src={logo} alt="logo" className="logo-img" />
              </Animated>
            </Typography>
            <MenuIcon onClick={this.onOpenModal} />
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
              <Grid container>
                <Grid item lg={12}>
                  <ul className="modal-ul">
                    <li>
                      {" "}
                      <Link className="link" to="/">
                        Home
                      </Link>{" "}
                    </li>
                    <li>
                      <Link className="link" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/marchandise">
                        Marchandise
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/services">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/bookonline">
                        Book Online
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="/contact">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Modal>
          </Toolbar>
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={400}
          >
            {" "}
            <h1 className="next-gen">{this.props.heading}</h1>{" "}
          </Animated>
          <Animated
            animationIn="bounceInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={400}
          >
            {" "}
            <p className="next-gen-para">{this.props.subHeading}</p>{" "}
          </Animated>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
