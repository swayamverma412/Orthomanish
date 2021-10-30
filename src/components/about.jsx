import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import pic14 from "../Images/14-1.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const About = (props) => {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ minWidth: "50%", maxWidth: "100%", marginTop: "20px" }}
        >
          <div style={{ margin: "0px" }}></div>{" "}
          <img src={pic14} className="img-responsive" alt="Missing Image" />{" "}
          <div style={{ margin: "0px" }}></div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ minWidth: "50%", maxWidth: "100%" }}
        >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="about-text">
              <h2 style={{ marginTop: "40px" }}>
                About Us
              </h2>
              <p style={{ textAlign: "left" }}>
                Dr.Manish kumar Sharma is currently working as Senior resident in Dept. of Orthopaedics at Samaleswari Hospital, Sundargadh. Completed his MBBS from Vydehi Medical College, Bangalore(Karnataka) and went for his PG training in Orthopedics from Hi-Tech Medical College, Bhubaneshwar (Odisha) in 2017. He has over 3 year exprience as senior residentin the Dept. of ORTHOPEDICS. A Compassionate doctor who always considers my patients’ needs and comfort levels during diagnosis and treatment, and works to ensure they have the best possible experience.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
