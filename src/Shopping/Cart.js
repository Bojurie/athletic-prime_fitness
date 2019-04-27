import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "./actions/cartActions";
import Recipe from "./Recipe";
class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  />
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  />
                </Link>
              </div>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </Button>
            </div>
          </li>
        );
      })
    ) : (
      <div>
        <p
          style={{
            marginleft: "50px",
            color: "tan",
            fontFamily: "verdana",
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
          Nothing.
        </p>{" "}
        <Button variant="contained" color="primary" size="large">
          <Link
            to="/marchandise"
            style={{
              textDecoration: "none",
              color: "white",
              margin: "25px",
              display: "block",
              fontFamily: "verdana",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            {" "}
            Please Go to Marchandise page to add items{" "}
          </Link>{" "}
        </Button>{" "}
      </div>
    );
    return (
      <div className="container">
        <div className="cart">
          <h3
            style={{
              marginleft: "25px",
              color: "tan",
              fontFamily: "verdana",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            You have ordered:
          </h3>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
