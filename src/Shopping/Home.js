import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import SidePanel from "../../src/Components/SidePanel";
import NavBar from "../../src/Components/NavBar";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import CardMedia from "@material-ui/core/CardMedia";
import Media from "react-media";
import ModalImage from "react-modal-image";

const styles = theme => ({
  root: {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    }
  },
  gridList: {
    width: "100%",
    height: "100%"
  },
  card: {
    maxWidth: 500,
    marginTop: "20px",
    marginLeft: "45px"
  },
  cardMobile: {
    maxWidth: 500,
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "40px"
  },
  media: {
    height: 180,
    backgroundColor: "grey"
  }
});
class Home extends React.Component {
  state = {
    counter: 0
  };
  handleClick = id => {
    this.props.addToCart(id);
  };
  getGridListCols = () => {
    if (isWidthUp("xl", this.props.width)) {
      return 4;
    }

    if (isWidthUp("lg", this.props.width)) {
      return 4;
    }

    if (isWidthUp("md", this.props.width)) {
      return 2;
    }

    return 1;
  };
  render() {
    const { classes, currentUser, images, width } = this.props;

    let itemList = (
      <div>
        <Media query="(max-width: 600px)">
          {matches =>
            matches ? (
              <div className={classes.root}>
                <GridList
                  cellHeight={300}
                  cols={1}
                  className={classes.gridList}
                >
                  {this.props.items.map(item => (
                    <Card className={classes.cardMobile}>
                      <CardActionArea>
                        <ModalImage
                          className={classes.media}
                          small={item.img}
                          large={item.img}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          {item.price}$
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => {
                            this.handleClick(item.id);
                            this.setState({ counter: this.state.counter + 1 });
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </GridList>
              </div>
            ) : (
              <div className={classes.root}>
                <GridList
                  cellHeight={290}
                  cols={5}
                  className={classes.gridList}
                >
                  {this.props.items.map(item => (
                    <Card className={classes.card}>
                      <CardActionArea>
                        <ModalImage
                          className={classes.media}
                          small={item.img}
                          large={item.img}
                        />
                        <CardContent>
                          <Typography variant="p" component="h3">
                            {item.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions style={{ display: "block" }}>
                        <Button size="small" color="primary">
                          {item.price}$
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => {
                            this.handleClick(item.id);
                            this.setState({ counter: this.state.counter + 1 });
                          }}
                        >
                          Add To Cart
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
                </GridList>
              </div>
            )
          }
        </Media>
      </div>
    );
    // let itemList = this.props.items.map(item => {
    //   return (

    // <Card key={item.id} className="shop-card">
    //   <CardActionArea>
    //     <img src={item.img} alt="Me" width="100%" height="100%" />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {item.title}
    //       </Typography>
    //       <Typography component="p">{item.desc}</Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button
    //       size="small"
    //       color="primary"
    //       style={{ display: "inline-block" }}
    //     >
    //       Price: {item.price}$
    //     </Button>
    //     <Button
    //       to="/"
    //       size="small"
    //       color="primary"
    //       onClick={() => {
    //         this.handleClick(item.id);
    //         this.setState({ counter: this.state.counter + 1 });
    //       }}
    //     >
    //       Add to Cart
    //     </Button>
    //   </CardActions>
    // </Card>
    //   );
    // });

    return (
      <React.Fragment>
        <Grid container>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <NavBar
              navImage="https://appgrooves.com/cdn/mc/SHOPPING/15_w730.jpg"
              height="100%"
              heading="Shop Here"
            />
          </Grid>{" "}
          <Grid item lg={11} sm={10} md={10} xs={10}>
            {" "}
            {itemList}{" "}
          </Grid>
          <Grid item lg={1} sm={2} md={2} xs={2}>
            {" "}
            <div style={{ position: "fixed" }}>
              {" "}
              <SidePanel counter={this.state.counter} />{" "}
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
