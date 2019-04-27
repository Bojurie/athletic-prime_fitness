import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  card: {
    maxWidth: 750,
    margin: "15px 22px"
  },
  media: {
    height: "150px",
    width: "100%",
    backgroundSize: "cover",
    paddingTop: "56.25%", // 16:9
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class HomeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              T
            </Avatar>
          }
          action={
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginRight: "125px",
                color: "black",
                opacity: "0.7"
              }}
            >
              {this.props.title}{" "}
            </p>
          }
        />
        <CardMedia className={classes.media} image={this.props.HomeImage} />
      </Card>
    );
  }
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeCard);
