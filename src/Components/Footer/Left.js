import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from "react-social-icons";

function IconAvatars(props) {
  return (
    <div>
      <h3>we are on</h3>
      <Grid container justify="center" alignItems="center">
        <Avatar className="avatar">
          <SocialIcon url="http://twitter.com" />
        </Avatar>
        <Avatar className="avatar">
          <SocialIcon url="http://facebook.com" />
        </Avatar>
        <Avatar className="avatar">
          <SocialIcon url="http://instagram.com" />
        </Avatar>
      </Grid>
    </div>
  );
}

export default IconAvatars;
