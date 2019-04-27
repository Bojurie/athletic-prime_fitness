import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { Face, Fingerprint, Email } from "@material-ui/icons";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
    backgroundColor: "grey"
  },
  padding: {
    padding: theme.spacing.unit,
    backgroundColor: "#573232"
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <h3>Please Fill The Form Below </h3>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="name"
                label="Name"
                type="text"
                fullWidth
                required
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Email />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Email"
                type="email"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Sign Up
            </Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);
