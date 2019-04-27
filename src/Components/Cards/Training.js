import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  card: {},
  media: {
    height: 0,
    paddingTop: "50%" // 16:9,
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

class Training extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className="card">
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography
            component="p"
            style={{
              textAlign: "center",
              color: "coral",
              fontSize: "16px",
              fontFamily: "verdana",
              fontWeight: "bolder"
            }}
          >
            {" "}
            {this.props.cardTitle}{" "}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description</Typography>
            <Typography paragraph>{this.props.collapse}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Training.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Training);
