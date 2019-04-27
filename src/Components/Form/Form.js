import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 1
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class Form extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-text"
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-text"
          label="Subject"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-text"
          label="Message"
          className={classes.textField}
          style={{ width: "100%" }}
          margin="normal"
          variant="outlined"
        />
        <button
          variant="outlined"
          color="default"
          className="book-online-button"
        >
          <span
            style={{
              color: "white",
              fontSize: "16px",
              fontFamily: "verdana",
              fontWeight: "revert"
            }}
          >
            Submit
          </span>
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
