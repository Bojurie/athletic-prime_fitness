import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  }
});

function PriceCard(props) {
  const { classes } = props;
  return (
    <div className="Chip">
      <Chip
        avatar={<Avatar>{props.avatar}</Avatar>}
        label={props.price}
        clickable
        className={classes.chip}
        color="primary"
      />
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PriceCard);
