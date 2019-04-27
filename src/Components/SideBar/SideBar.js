import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import tileData from "./tileData";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  },
  gridList: {
    width: 500,
    height: 650
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

function SideBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader
            component="div"
            style={{
              textAlign: "center",
              fontFamily: "Comic Sans MS",
              fontWeight: "bold",
              background: "grey",
              fontSize: "20px",
              color: "white"
            }}
          >
            Latest Inventory
          </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <Link to="/marchandise">
              {" "}
              <img src={tile.img} alt={tile.title} width="100%" height="100%" />
            </Link>
            <GridListTileBar />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
