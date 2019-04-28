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
          <SocialIcon url="http://twitter.com" target="_blank"/>
        </Avatar>
        <Avatar className="avatar">
          <SocialIcon url="https://www.facebook.com/AthleticPrime/" target="_blank"/>
        </Avatar>
        <Avatar className="avatar">
          <SocialIcon url="https://www.instagram.com/athleticprime_fitness/?hl=en" target="_blank" />
        </Avatar>
      </Grid>
    </div>
  );
}

export default IconAvatars;
