import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import doctor from '../Images/3.jpeg';
import bandage from '../Images/9.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"25px",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Advantages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={3} xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 style={{color:'#5ca9fb', paddingBottom:'5px', textAlign:'center',fontSize:'20px',justifyContent: "center", alignItems: "center", margin:"40px auto", marginBottom:"10px"}}>Our Advantages & Capabilities</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ fontSize:'40px',textAlign:'center', marginBottom:'25px',justifyContent: "center", alignItems: "center", margin:"0 auto",}}>Why patients choose us</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='200px'  src={doctor} alt="Doctor" style={{display: "flex", justifyContent: "center", alignItems: "center", margin:"20px auto", }}/>
          <h3 style={{color:'black',textAlign:'center',justifyContent: "center", alignItems: "center", margin:"0 auto", fontSize:'30px',margin:"20px 0 "}}>Surgery Center</h3>
          <p style={{textAlign:'center',justifyContent: "center", alignItems: "center", margin:"15px 25px",}}>Our Center provides patients with a
                                            convenient day surgery center. An
                                         alternative to the hospital, our center is
                                         easily accessible, equipped with comfortable
                                         waiting rooms for family, and staffed with
                                                experienced doctors and nurses.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img height='200px' src={bandage} alt="Bandage" style={{display: "flex", justifyContent: "center", alignItems: "center",margin:"20 auto" }}/>
          <h3 style={{color:'black', textAlign:'center',fontSize:'30px',justifyContent: "center", alignItems: "center", margin:"0 auto", margin:"20px 0"}}>Physical Therapy</h3>
          <p style={{textAlign:'center',justifyContent: "center", alignItems: "center", margin:"15px 25px",}}>Your recovery, fully integrated. Whether you
                                      want to get back to the athletic field,
                                      workplace or simply your daily routine, our
                                      team of specialized therapists are
                                      passionate about helping you reach your
                                      goals.</p>
        </Grid>
        </Grid>
    </div>
  );
}
