import React from "react";

function Middle() {
  return (
    <div
      style={{
        marginTop: "30px",
        fontSize: "15px",
        fontWeight: "normal",
        fontFamily: "verdana"
      }}
    >
      {" "}
      &copy; by Bojurie Rogers Wright <br />
      <p>
        This site uses cookies for statistical purposes. Using the site is
        tantamount to accepting the
        <span
          style={{
            fontSize: "16px",
            color: "black",
            fontWeight: "bold",
            marginLeft: "5px",
            opacity: "0.9"
          }}
        >
          privacy policy.{" "}
        </span>{" "}
      </p>
    </div>
  );
}
export default Middle;
