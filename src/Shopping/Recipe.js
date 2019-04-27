import React, { Component } from "react";
import { connect } from "react-redux";
//import { addShipping } from './actions/cartActions'
import { Button } from "@material-ui/core";
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span
                style={{
                  color: "tan",
                  fontFamily: "verdana",
                  fontWeight: "bold",
                  fontSize: "15px",
                  margin: "2px"
                }}
              >
                Shipping(+6$)
              </span>
            </label>
          </li>
          <li className="collection-item">
            <b>
              {" "}
              <span
                style={{
                  color: "white",
                  fontFamily: "verdana",
                  fontWeight: "bold",
                  fontSize: "15px",
                  margin: "2px"
                }}
              >
                {" "}
                Total: {this.props.total} $
              </span>{" "}
            </b>
          </li>
        </div>
        <div className="checkout">
          <Button
            size="small"
            color="primary"
            variant="contained"
            style={{
              margin: "20px",
              padding: "8px",
              border: "5px solid navy",
              borderRadius: "20px"
            }}
          >
            <span
              style={{
                color: "white",
                fontFamily: "verdana",
                fontWeight: "bold",
                fontSize: "15px",
                margin: "2px",
                padding: "5px",
                border: "5px solid navy",
                borderRadius: "10px",
                boxShadow: "3px 3px royalblue"
              }}
            >
              {" "}
              Checkout{" "}
            </span>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
