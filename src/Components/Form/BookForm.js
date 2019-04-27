import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Modal from "react-responsive-modal";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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

class BookForm extends React.Component {
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
        <Button variant="outlined" color="primary" onClick={this.onOpenModal}>
          {" "}
          Fill Form{" "}
        </Button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <Grid container>
            <Grid item lg={12}>
              <ul className="modal-ul">
                <li>
                  {" "}
                  <TextField id="standard-dense" label="Name*" margin="dense" />
                </li>
                <li>
                  <TextField
                    id="standard-dense"
                    label="Email*"
                    margin="dense"
                  />
                </li>
                <li>
                  <TextField
                    id="standard-dense"
                    label="Phone Number*"
                    margin="dense"
                  />
                </li>

                <li>
                  <TextField
                    id="standard-dense"
                    label="Street*"
                    margin="dense"
                  />
                </li>
                <li>
                  <TextField
                    id="standard-dense"
                    label="Floor Number*"
                    margin="dense"
                  />
                </li>
                <li>
                  <TextField id="standard-dense" label="City*" margin="dense" />
                </li>
                <li>
                  <TextField
                    id="standard-dense"
                    label="Message"
                    margin="dense"
                  />
                </li>
                <Button color="primary" variant="outlined">
                  {" "}
                  Submit{" "}
                </Button>
              </ul>
            </Grid>
          </Grid>
        </Modal>
      </div>
    );
  }
}

BookForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookForm);
